import { Component } from '@angular/core';

@Component({
  selector: 'app-compliance',
  standalone: true,
  template: `
    <section id="compliance" class="compliance section-blue">
      <div class="compliance__inner">
        <div class="compliance__header" data-aos="fade-up">
          <div class="section-label section-label--center section-label--light">Regulatory Compliance</div>
          <h2 class="section-h2">Legal &amp; <em>Regulatory</em> Compliance</h2>
          <p class="section-body compliance__desc">
            We strictly follow the legal requirements of every destination country to ensure safe and legal medicine delivery.
          </p>
        </div>

        <div class="compliance__grid">
          <div class="compliance__card" data-aos="fade-up" data-aos-delay="100">
            <div class="compliance__flag">
              <i class="fas fa-flag"></i>
            </div>
            <h3>
              <i class="fas fa-check-circle"></i>
              Saudi Arabia &mdash; SFDA Compliance
            </h3>
            <ul>
              <li>Compliance with Saudi Food and Drug Authority (SFDA) requirements</li>
              <li>Assistance with required approvals</li>
              <li>Documentation prepared according to applicable regulations</li>
            </ul>
          </div>

          <div class="compliance__card" data-aos="fade-up" data-aos-delay="200">
            <div class="compliance__flag">
              <i class="fas fa-flag"></i>
            </div>
            <h3>
              <i class="fas fa-check-circle"></i>
              UAE &mdash; MOH Guideline Support
            </h3>
            <ul>
              <li>Shipment processing in accordance with Ministry of Health (MOH) guidelines</li>
              <li>Proper documentation support</li>
              <li>Prescription verification before dispatch</li>
            </ul>
          </div>

          <div class="compliance__card" data-aos="fade-up" data-aos-delay="300">
            <div class="compliance__flag">
              <i class="fas fa-globe"></i>
            </div>
            <h3>
              <i class="fas fa-check-circle"></i>
              Other Countries
            </h3>
            <ul>
              <li>Country-specific documentation</li>
              <li>Import compliance support</li>
              <li>Prescription validation</li>
              <li>Courier documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './compliance.component.scss',
})
export class ComplianceComponent {}
