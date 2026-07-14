import { Component } from '@angular/core';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  template: `
    <section id="vision" class="vision">
      <div class="vision__header" data-reveal data-aos="fade-up">
        <div class="section-label section-label--center section-label--light">What We Manage</div>
        <h2 class="section-h2">Complete End-to-End<br /><em>Process Management</em></h2>
      </div>

      <div class="vision__grid">
        <div class="vision__card" data-aos="fade-up" data-aos-delay="100">
          <div class="vision__icon"><i class="fas fa-file-signature"></i></div>
          <h3>Documentation Services</h3>
          <div class="vision__list">
            @for (item of docServices; track item) {
              <span><i class="fas fa-check"></i> {{ item }}</span>
            }
          </div>
        </div>

        <div class="vision__card" data-aos="fade-up" data-aos-delay="200">
          <div class="vision__icon"><i class="fas fa-truck"></i></div>
          <h3>Shipping & Delivery</h3>
          <div class="vision__list">
            @for (item of shippingItems; track item) {
              <span><i class="fas fa-check"></i> {{ item }}</span>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './vision-mission.component.scss',
})
export class VisionMissionComponent {
  readonly docServices = [
    'Prescription Verification',
    'Medicine Availability Check',
    'Regulatory Documentation',
    'Country-specific Approval Process',
    'SFDA Documentation Support for Saudi Arabia',
    'MOH Guideline Support for UAE Shipments',
    'Courier Documentation',
    'Customs Documentation',
  ];

  readonly shippingItems = [
    'Secure Medicine Packaging',
    'Temperature-conscious Packing (where required)',
    'International Courier Processing',
    'Door-to-Door Delivery',
    'Shipment Tracking Assistance',
  ];
}
