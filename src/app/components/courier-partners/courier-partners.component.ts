import { Component } from '@angular/core';

@Component({
  selector: 'app-courier-partners',
  standalone: true,
  template: `
    <section class="courier-partners">
      <div class="courier-partners__inner">
        <div class="courier-partners__header" data-aos="fade-up">
          <div class="section-label section-label--center">Trusted Logistics</div>
          <h2 class="section-h2">Our Courier <em>Partners</em></h2>
          <p class="section-body courier-partners__sub">
            We ship your medicines worldwide through globally trusted courier networks —
            ensuring safe, trackable, and timely delivery to your doorstep.
          </p>
        </div>

        <div class="courier-partners__grid">
          @for (p of partners; track p.name) {
            <div class="courier-card" data-aos="fade-up" [attr.data-aos-delay]="$index * 100">
              <div class="courier-card__img-wrap">
                <img [src]="p.img" [alt]="p.name + ' logo'" loading="lazy" />
              </div>
              <div class="courier-card__body">
                <h3 class="courier-card__name">{{ p.name }}</h3>
                <p class="courier-card__desc">{{ p.desc }}</p>
                <div class="courier-card__tags">
                  @for (tag of p.tags; track tag) {
                    <span class="courier-tag">{{ tag }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>

        <p class="courier-partners__note" data-aos="fade-up">
          <i class="fas fa-shield-alt"></i>
          All shipments are fully tracked, insured, and comply with international pharmaceutical shipping regulations.
        </p>
      </div>
    </section>
  `,
  styleUrl: './courier-partners.component.scss',
})
export class CourierPartnersComponent {
  readonly partners = [
    {
      name: 'DHL Express',
      img: 'm1.jpeg',
      desc: 'World-class express delivery with real-time tracking across 220+ countries.',
      tags: ['Express', 'Tracked', 'Global'],
    },
    {
      name: 'Aramex',
      img: 'm2.jpeg',
      desc: 'Specialist in Middle East & GCC deliveries — UAE, Saudi Arabia, Qatar, Oman & Bahrain.',
      tags: ['Middle East', 'GCC', 'Reliable'],
    },
    {
      name: 'FedEx',
      img: 'm3.jpeg',
      desc: 'Trusted international courier for USA, UK, Ireland, Australia and beyond.',
      tags: ['USA', 'UK', 'Australia'],
    },
  ];
}
