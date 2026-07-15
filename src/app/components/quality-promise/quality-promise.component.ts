import { Component } from '@angular/core';

@Component({
  selector: 'app-quality-promise',
  standalone: true,
  template: `
    <section id="quality" class="quality">
      <div class="quality__inner" data-reveal data-aos="zoom-in">
        <div class="quality__shield">
          <div class="quality__shield-ring"></div>
          <i class="fas fa-shield-halved"></i>
        </div>
        <div class="quality__content">
          <div class="section-label">Quality Assurance</div>
          <h2 class="section-h2">Every Shipment Carefully<br /><em>Checked & Verified</em></h2>
          <p class="section-body quality__text">
            Every shipment is carefully checked before dispatch. We ensure that every medicine
            meets our strict quality standards through comprehensive verification at every stage.
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
    'Expiry Date Checking',
    'Safe Handling',
    'Reliable Courier Processing',
    'Tracking Support',
    'Authenticity Verification',
    'Customs Documentation Support',
  ];
}
