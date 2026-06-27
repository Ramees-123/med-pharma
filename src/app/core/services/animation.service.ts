import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({ providedIn: 'root' })
export class AnimationService {
  private readonly platformId = inject(PLATFORM_ID);
  private initialized = false;

  private get isMobile(): boolean {
    if (!isPlatformBrowser(this.platformId)) return true;
    return window.matchMedia('(max-width: 768px)').matches;
  }

  private get prefersReducedMotion(): boolean {
    if (!isPlatformBrowser(this.platformId)) return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private shouldAnimate(): boolean {
    return isPlatformBrowser(this.platformId) && !this.isMobile && !this.prefersReducedMotion;
  }

  init(): void {
    if (!isPlatformBrowser(this.platformId) || this.initialized) return;
    gsap.registerPlugin(ScrollTrigger);
    this.initialized = true;
  }

  heroEntrance(heroEl: HTMLElement): void {
    if (!this.shouldAnimate()) return;

    try {
      this.init();
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      const left = heroEl.querySelector('.hero__left');
      const right = heroEl.querySelector('.hero__right');
      const bar = heroEl.querySelector('.hero__contact-bar');

      if (left) tl.from(left.children, { y: 24, opacity: 0, stagger: 0.08, duration: 0.6 }, 0.2);
      if (right) tl.from(right, { scale: 0.95, opacity: 0, duration: 0.7 }, 0.4);
      if (bar) tl.from(bar, { y: 16, opacity: 0, duration: 0.5 }, 0.6);
    } catch {
      // non-blocking
    }
  }

  setupScrollReveals(): void {
    if (!this.shouldAnimate()) return;

    try {
      this.init();

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        this.revealOnScroll(el, { y: 30 });
      });

      gsap.utils.toArray<HTMLElement>('.service-card').forEach((card, i) => {
        this.revealOnScroll(card, { y: 40, delay: (i % 3) * 0.08 });
      });

      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step) => {
        const content = step.querySelector('.process-content');
        const dot = step.querySelector('.process-dot');
        if (content) {
          this.revealOnScroll(content as HTMLElement, {
            x: step.classList.contains('process-step--right') ? 30 : -30,
          });
        }
        if (dot) {
          this.revealOnScroll(dot as HTMLElement, { scale: 0 }, { scale: 1 });
        }
      });

      ScrollTrigger.refresh();
    } catch {
      // non-blocking
    }
  }

  private revealOnScroll(
    el: HTMLElement,
    from: gsap.TweenVars,
    to: gsap.TweenVars = { opacity: 1, y: 0, x: 0, scale: 1 }
  ): void {
    const inView = el.getBoundingClientRect().top < window.innerHeight * 0.92;

    if (inView) {
      gsap.set(el, to);
      return;
    }

    gsap.fromTo(
      el,
      { opacity: 0, ...from },
      {
        ...to,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      }
    );
  }

  parallaxHero(bgEl: HTMLElement): void {
    if (!this.shouldAnimate()) return;

    try {
      this.init();
      gsap.to(bgEl, {
        scrollTrigger: { trigger: bgEl, start: 'top top', end: 'bottom top', scrub: true },
        scale: 1.06,
        y: 30,
      });
    } catch {
      // non-blocking
    }
  }

  animateCounter(el: HTMLElement, target: number, suffix: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (!this.shouldAnimate()) {
      el.textContent = target.toLocaleString() + suffix;
      return;
    }

    try {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toLocaleString() + suffix;
        },
      });
    } catch {
      el.textContent = target.toLocaleString() + suffix;
    }
  }
}
