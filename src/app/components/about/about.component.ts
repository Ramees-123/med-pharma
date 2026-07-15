import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="about">
      <div class="about__grid">
        <div>
          <div class="section-label section-label--light">About Us</div>
          <h2 class="section-h2">Trusted Personal<br /><em>Medicine Delivery</em> from India</h2>
          <p class="section-body about__body">
            We are a trusted medicine delivery company based in Kerala, India, committed to providing
            safe, genuine, and affordable medicines to customers across India and several international
            destinations.
          </p>
          <p class="section-body about__body">
            Our mission is to simplify the process of obtaining medicines from India by handling every
            step professionally &mdash; from prescription verification to documentation, regulatory approvals,
            courier processing, and doorstep delivery.
          </p>
          <p class="section-body about__body">
            We specialize in delivering both English (Allopathic) medicines and Ayurvedic medicines
            while ensuring full compliance with the regulations of the destination country.
          </p>
          <div class="about__pills">
            @for (pill of pills; track pill) {
              <div class="about__pill"><i class="fas fa-check-circle"></i> {{ pill }}</div>
            }
          </div>
        </div>

        <div class="about__right">
          <div class="about__card glass-card">
            <div class="about__card-accent"></div>
            <p class="about__quote">
              &ldquo;Our experienced team works closely with customers to make international medicine
              shipping simple, secure, and stress-free.&rdquo;
            </p>
            <div class="about__icons">
              @for (item of features; track item.title) {
                <div class="about__icon-item">
                  <div class="about__icon-box"><i class="fas" [class]="item.icon"></i></div>
                  <div>
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.desc }}</p>
                  </div>
                </div>
              }
            </div>
            <div class="about__badge">
              <div class="about__badge-num">100%</div>
              <div class="about__badge-lbl">Legal Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly pills = [
    'Personal Medical Use Only',
    'Legal International Shipping',
    'Affordable & Transparent Pricing',
    'Safe Temperature-controlled Handling',
    'Responsive Customer Support',
  ];

  readonly features = [
    {
      icon: 'fa-shield-alt',
      title: 'Quality Promise',
      desc: 'Every medicine is verified before dispatch.',
    },
    {
      icon: 'fa-globe',
      title: 'Global Reach',
      desc: 'Serving India, UAE, Saudi Arabia, Qatar, Oman, Bahrain, UK, USA, Ireland, and Australia.',
    },
    {
      icon: 'fa-clock',
      title: 'Fast Turnaround',
      desc: 'Quick processing from verification to dispatch.',
    },
    {
      icon: 'fa-list-check',
      title: 'End-to-End Management',
      desc: 'Complete process handled from start to finish.',
    },
  ];
}