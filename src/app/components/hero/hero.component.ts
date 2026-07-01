import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';
import { AnimationService } from '../../core/services/animation.service';
import { CONTACT } from '../../core/data/site-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MagneticDirective],
  template: `
    <section id="hero" class="hero" #heroSection>
      <div class="hero__video-wrap" #heroBg>
        <video
          #heroVideo
          class="hero__video"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          poster="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1920"
        ></video>
        <div class="hero__overlay"></div>
      </div>

      <div class="hero__grid"></div>

      <div class="hero__inner">
        <!-- Left: copy + actions + stats -->
        <div class="hero__left">
          <p class="hero__brand">Well <span>Med</span> Pharma</p>
          <div class="hero-eyebrow">Healthcare Beyond Medicine</div>

          <h1 class="hero-title">
            Empowering Healthcare<br />
            with <em>Excellence</em>
          </h1>

          <p class="hero-sub">
            Trusted Medicines. Healthier Lives. Premium Care.<br />
            Delivering genuine pharmaceutical products across India, GCC countries, the UK, the USA, Australia, and Ireland.
          </p>

          <div class="hero-actions">
            <a href="#contact" class="btn-primary-wmp btn-magnetic" appMagnetic>
              <i class="fas fa-envelope"></i> Contact Us
            </a>
            <a
              [href]="contact.whatsappLink"
              class="btn-wa-wmp btn-magnetic"
              appMagnetic
              target="_blank"
              rel="noopener"
            >
              <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="#about" class="btn-ghost-wmp btn-magnetic" appMagnetic>
              Learn More <i class="fas fa-arrow-down"></i>
            </a>
          </div>

          <div class="hero-stats">
            @for (stat of quickStats; track stat.label) {
              <div class="hero-stat glass-card">
                <span class="hero-stat__num">{{ stat.value }}</span>
                <span class="hero-stat__lbl">{{ stat.label }}</span>
              </div>
            }
          </div>
        </div>

        <!-- Right: visual ring -->
        <div class="hero__right">
          <div class="hero-visual">
            <div class="hero-visual__ring hero-visual__ring--1"></div>
            <div class="hero-visual__ring hero-visual__ring--2"></div>
            <div class="hero-visual__ring hero-visual__ring--3"></div>
            <div class="hero-visual__center">
              <div class="hero-visual__badge">
                <img src="icon2.png" alt="Well Med Pharma" class="hero-visual__image" />
              </div>
              <div class="hero-visual__label">Well Med Pharma</div>
              <div class="hero-visual__sub">Trusted · Quality · Care</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact strip — always visible in hero -->
      <div class="hero__contact-bar">
        <a href="#contact" class="hero__contact-item">
          <i class="fas fa-location-dot"></i>
          <span>Edavanna, Malappuram, Kerala</span>
        </a>
        <a [href]="'tel:' + contact.phoneIndia" class="hero__contact-item">
          <i class="fas fa-phone"></i>
          <span>{{ contact.phoneIndia }}</span>
        </a>
        <a [href]="contact.whatsappLink" class="hero__contact-item" target="_blank" rel="noopener">
          <i class="fab fa-whatsapp"></i>
          <span>{{ contact.whatsapp }}</span>
        </a>
        <a href="mailto:info.wellmedpharma@gmail.com" class="hero__contact-item">
          <i class="fas fa-envelope"></i>
          <span>info.wellmedpharma@gmail.com</span>
        </a>
        <a [href]="contact.whatsappUaeLink" class="hero__contact-item" target="_blank" rel="noopener">
          <i class="fab fa-whatsapp"></i>
          <span>WhatsApp UAE {{ contact.phoneUae }}</span>
        </a>
      </div>

      <a href="#about" class="hero__scroll" aria-label="Scroll down">
        <span>Scroll</span>
        <div class="hero__scroll-line"></div>
      </a>
    </section>
  `,
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  private static readonly VIDEO_DESKTOP =
    'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4';
  private static readonly VIDEO_MOBILE =
    'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4';

  private readonly anim = inject(AnimationService);
  private readonly heroRef = viewChild<ElementRef<HTMLElement>>('heroSection');
  private readonly bgRef = viewChild<ElementRef<HTMLElement>>('heroBg');
  private readonly videoRef = viewChild<ElementRef<HTMLVideoElement>>('heroVideo');

  readonly contact = CONTACT;
  readonly quickStats = [
    { value: '5000+', label: 'Customers' },
    { value: '100+', label: 'Products' },
    { value: '10+', label: 'Years Trust' },
  ];

  ngAfterViewInit(): void {
    const hero = this.heroRef()?.nativeElement;
    const bg = this.bgRef()?.nativeElement;
    if (hero) this.anim.heroEntrance(hero);
    if (bg) this.anim.parallaxHero(bg);
    this.initHeroVideo();
  }

  private initHeroVideo(): void {
    const video = this.videoRef()?.nativeElement;
    if (!video) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    video.src = isMobile ? HeroComponent.VIDEO_MOBILE : HeroComponent.VIDEO_DESKTOP;
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const tryPlay = (): void => {
      video.play().catch(() => {
        // iOS / low-power mode: play on first touch
        const onTouch = (): void => {
          video.play().catch(() => {});
          document.removeEventListener('touchstart', onTouch);
          document.removeEventListener('click', onTouch);
        };
        document.addEventListener('touchstart', onTouch, { once: true, passive: true });
        document.addEventListener('click', onTouch, { once: true });
      });
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('loadeddata', tryPlay, { once: true });
      video.load();
    }
  }
}
