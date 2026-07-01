import { Component } from '@angular/core';
import { SERVICES } from '../../core/data/site-data';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section id="services" class="services">
      <div class="services__header" data-reveal data-aos="fade-up">
        <div class="section-label section-label--center">What We Offer</div>
        <h2 class="section-h2">Our <em>Services</em></h2>
        <p class="section-body services__desc">
          From prescription medicines to bulk healthcare supply — we handle it all with
          precision and care.
        </p>
      </div>

      <div class="services__grid">
        @for (service of services; track service.num) {
          <div class="service-card" [id]="service.anchorId">
            <div class="service-card__num">{{ service.num }}</div>
            <div class="service-card__icon">
              <i class="fas" [class]="service.icon"></i>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <div class="service-card__arrow">
              Explore <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly services = SERVICES;
}
