import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LoaderComponent } from '../../components/loader/loader.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { VisionMissionComponent } from '../../components/vision-mission/vision-mission.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ProcessComponent } from '../../components/process/process.component';
import { ComplianceComponent } from '../../components/compliance/compliance.component';
import { CommitmentComponent } from '../../components/commitment/commitment.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { WhyChooseComponent } from '../../components/why-choose/why-choose.component';
import { QualityPromiseComponent } from '../../components/quality-promise/quality-promise.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CourierPartnersComponent } from '../../components/courier-partners/courier-partners.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FloatingButtonsComponent } from '../../components/floating-buttons/floating-buttons.component';
import { AnimationService } from '../../core/services/animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LoaderComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    VisionMissionComponent,
    ServicesComponent,
    ProcessComponent,
    ComplianceComponent,
    CommitmentComponent,
    StatsComponent,
    WhyChooseComponent,
    QualityPromiseComponent,
    TestimonialsComponent,
    CourierPartnersComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    FloatingButtonsComponent,
  ],
  template: `
    <app-loader />
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-vision-mission />
      <app-services />
      <app-process />
      <app-compliance />
      <app-commitment />
      <app-stats />
      <app-why-choose />
      <app-quality-promise />
      <app-testimonials />
      <app-courier-partners />
      <app-faq />
      <app-contact />
    </main>
    <app-footer />
    <app-floating-buttons />
  `,
})
export class HomeComponent implements AfterViewInit {
  private readonly anim = inject(AnimationService);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isMobile && !reducedMotion) {
      import('aos')
        .then((mod) => {
          const aos = mod.default ?? mod;
          aos.init({ duration: 600, once: true, offset: 50, disable: 'mobile' });
          document.documentElement.classList.add('aos-init');
        })
        .catch(() => {});
    }

    setTimeout(() => this.anim.setupScrollReveals(), isMobile ? 500 : 1500);
  }
}
