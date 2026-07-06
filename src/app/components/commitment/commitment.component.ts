import { Component } from '@angular/core';

@Component({
  selector: 'app-commitment',
  standalone: true,
  template: `
    <section id="commitment" class="commitment">
      <div class="commitment__inner">
        <div class="commitment__header" data-aos="fade-up">
          <div class="section-label section-label--center">Our Commitment</div>
          <h2 class="section-h2">What We <em>Stand For</em></h2>
          <p class="section-body commitment__desc">
            We are committed to providing genuine medicines with complete legal compliance and professional service.
          </p>
        </div>

        <div class="commitment__grid">
          @for (item of commitments; track item.label; let i = $index) {
            <div
              class="commitment__item"
              data-aos="fade-up"
              [attr.data-aos-delay]="(i % 4) * 80"
            >
              <div class="commitment__icon"><i class="fas" [class]="item.icon"></i></div>
              <span>{{ item.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './commitment.component.scss',
})
export class CommitmentComponent {
  readonly commitments = [
    { icon: 'fa-prescription-bottle', label: 'Genuine Medicines' },
    { icon: 'fa-gavel', label: 'Legal Compliance' },
    { icon: 'fa-shield-alt', label: 'Patient Safety' },
    { icon: 'fa-bolt', label: 'Fast Processing' },
    { icon: 'fa-file-alt', label: 'Professional Documentation' },
    { icon: 'fa-headset', label: 'Reliable Support' },
    { icon: 'fa-clock', label: 'Timely Delivery' },
    { icon: 'fa-box', label: 'Secure Packaging' },
    { icon: 'fa-comments', label: 'Transparent Communication' },
    { icon: 'fa-smile', label: 'Customer Satisfaction' },
  ];
}
