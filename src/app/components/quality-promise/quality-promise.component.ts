import { Component } from '@angular/core';

@Component({
  selector: 'app-quality-promise',
  standalone: true,
  template: `
    <section id="quality" class="quality">
      <div class="quality__inner glass-card" data-reveal data-aos="zoom-in">
        <div class="quality__shield">
          <div class="quality__shield-ring"></div>
          <i class="fas fa-shield-halved"></i>
        </div>
        <div class="quality__content">
          <div class="section-label">Quality Promise</div>
          <h2 class="section-h2">Our Commitment to <em>Excellence</em></h2>
          <p class="section-body quality__text">
            Every product that leaves Well Med Pharma has passed rigorous quality verification.
            We source exclusively from licensed manufacturers, maintain complete supply-chain
            documentation, and never compromise on authenticity — because your health deserves
            nothing less than the best.
          </p>
          <div class="quality__badges">
            @for (badge of badges; track badge) {
              <span class="quality__badge"><i class="fas fa-check"></i> {{ badge }}</span>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './quality-promise.component.scss',
})
export class QualityPromiseComponent {
  readonly badges = [
    'Licensed Sourcing',
    'Expiry Verified',
    'Cold Chain Ready',
    'Full Traceability',
  ];
}
