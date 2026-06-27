import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="about">
      <div class="about__grid">
        <div>
          <div class="section-label">Who We Are</div>
          <h2 class="section-h2">A Legacy of<br /><em>Trusted Care</em></h2>
          <p class="section-body about__body">
            Well Med Pharma is a premier pharmaceutical distributor based in Malappuram,
            Kerala — committed to making genuine, high-quality medicines accessible across
            India and the UAE. We combine the warmth of local service with the standards of
            an international healthcare brand.
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
              "Our mission is simple — to be the most trusted name in healthcare
              distribution, ensuring every patient receives genuine medicine with dignity
              and speed."
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
              <div class="about__badge-num">98%</div>
              <div class="about__badge-lbl">Satisfaction</div>
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
    'Genuine Medicines',
    'Quality Assured',
    'Fast Delivery',
    'India & UAE',
    'Bulk Orders Welcome',
    '24/7 Support',
  ];

  readonly features = [
    {
      icon: 'fa-shield-alt',
      title: 'Quality Promise',
      desc: 'Every product meets strict pharmaceutical standards.',
    },
    {
      icon: 'fa-globe',
      title: 'Global Reach',
      desc: 'Serving customers across India and the UAE.',
    },
    {
      icon: 'fa-handshake',
      title: 'Partnership',
      desc: 'Long-term relationships built on trust.',
    },
    {
      icon: 'fa-truck-fast',
      title: 'Swift Delivery',
      desc: 'Prompt dispatch with real-time coordination.',
    },
  ];
}
