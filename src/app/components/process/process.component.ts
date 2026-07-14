import { Component } from '@angular/core';
import { PROCESS_STEPS } from '../../core/data/site-data';

@Component({
  selector: 'app-process',
  standalone: true,
  template: `
    <section id="process" class="process">
      <div class="process__header" data-reveal data-aos="fade-up">
        <div class="section-label section-label--center section-label--light">Our Process</div>
        <h2 class="section-h2">Complete End-to-End <em>Process</em></h2>
        <p class="section-body process__desc">
          We manage the complete process for our customers &mdash; from prescription verification to doorstep delivery.
        </p>
      </div>

      <div class="process__track">
        @for (step of steps; track step.step) {
          <div class="process-step" data-aos="fade-up" [attr.data-aos-delay]="$index * 80">
            <div class="process-step__num">{{ step.step }}</div>
            <div class="process-content">
              <div class="process-content__num">Step {{ step.step }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        }
      </div>

      <div class="process__note" data-aos="fade-up">
        <i class="fas fa-info-circle"></i>
        Customers do not need to coordinate separately with friends or relatives abroad. We handle the complete medicine shipment process professionally.
      </div>
    </section>
  `,
  styleUrl: './process.component.scss',
})
export class ProcessComponent {
  readonly steps = PROCESS_STEPS;
}
