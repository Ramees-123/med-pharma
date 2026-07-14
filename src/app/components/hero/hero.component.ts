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
      <div class="hero__bg-wrap" #heroBg>
        <div class="hero__bg-overlay"></div>
        <div class="hero__pattern"></div>
      </div>

      <div class="hero__inner">
        <div class="hero__left">
          <div class="hero-badge">
            <span class="hero-badge__icon"><i class="fas fa-shield-alt"></i></span>
            <span class="hero-badge__text">Safe • Legal • Affordable</span>
          </div>

          <h1 class="hero-title">
            Trusted Personal Medicine<br />
            Delivery from <em>India</em>
          </h1>

          <p class="hero-sub">
            We help patients receive genuine medicines from India with complete documentation,
            prescription verification, country-specific approvals, secure packaging,
            and reliable international delivery.
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
              <div class="hero-stat glass-card-dark">
                <span class="hero-stat__num">{{ stat.value }}</span>
                <span class="hero-stat__lbl">{{ stat.label }}</span>
              </div>
            }
          </div>
        </div>

        <div class="hero__right">
          <div class="hero-visual">
            <div class="hero-visual__card">
              <div class="hero-visual__glow"></div>
              <div class="hero-visual__logo-wrap">
                <img src="/icon3.png" alt="Well Med Pharma" class="hero-visual__logo" />
              </div>
              <div class="hero-visual__name">WellMed Pharma</div>
              <div class="hero-visual__tagline">Trusted • Quality • Care</div>
              <div class="hero-visual__divider"></div>
              <div class="hero-visual__pills">
                <span><i class="fas fa-shield-alt"></i> Safe</span>
                <span><i class="fas fa-gavel"></i> Legal</span>
                <span><i class="fas fa-tag"></i> Affordable</span>
              </div>
            </div>
            <div class="hero-visual__info-row">
              <span><i class="fas fa-prescription-bottle-medical"></i> Genuine Medicines</span>
              <span><i class="fas fa-globe"></i> 12+ Countries</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hero__contact-bar glass-card-dark">
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
          <span>WhatsApp {{ contact.whatsapp }}</span>
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
  private readonly anim = inject(AnimationService);
  private readonly heroRef = viewChild<ElementRef<HTMLElement>>('heroSection');
  private readonly bgRef = viewChild<ElementRef<HTMLElement>>('heroBg');

  readonly contact = CONTACT;
  readonly quickStats = [
    { value: '3+', label: 'Years Trust' },
    { value: '1000+', label: 'Happy Customers' },
    { value: '12+', label: 'Countries' },
  ];
  
  private counterAnimated = false;

  ngAfterViewInit(): void {
    const hero = this.heroRef()?.nativeElement;
    const bg = this.bgRef()?.nativeElement;
    if (hero) this.anim.heroEntrance(hero);
    if (bg) this.anim.parallaxHero(bg);

    // Animate counters after page loads
    setTimeout(() => this.animateCounters(hero), 2000);
  }

  private animateCounters(hero: HTMLElement | undefined): void {
    if (this.counterAnimated) return;
    this.counterAnimated = true;

    const statNums = hero?.querySelectorAll('.hero-stat__num');
    statNums?.forEach((el, i) => {
      const target = parseInt(this.quickStats[i].value.replace(/\D/g, '')) || 0;
      const suffix = this.quickStats[i].value.replace(/[\d,]/g, '');
      if (target > 0) {
        // Animate counter with stagger after loading screen
        setTimeout(() => {
          this.anim.animateCounter(el as HTMLElement, target, suffix);
        }, i * 200);
      }
    });
  }
}
