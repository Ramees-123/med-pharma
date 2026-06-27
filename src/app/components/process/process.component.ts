import { Component } from '@angular/core';
import { PROCESS_STEPS } from '../../core/data/site-data';

@Component({
  selector: 'app-process',
  standalone: true,
  template: `
    <section id="process" class="process">
      <div class="process__header" data-reveal data-aos="fade-up">
        <div class="section-label section-label--center">How It Works</div>
        <h2 class="section-h2">From <em>Inquiry</em> to Delivery</h2>
        <p class="section-body process__desc">
          A streamlined, transparent process designed to give you confidence at every stage.
        </p>
      </div>

      <div class="process__track">
        @for (step of steps; track step.step; let i = $index) {
          <div
            class="process-step"
            [class.process-step--right]="i % 2 === 1"
          >
            @if (i % 2 === 0) {
              <div class="process-content process-step__left">
                <div class="process-content__num">Step {{ step.step }}</div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
              </div>
              <div class="process-step__center">
                <div class="process-dot">{{ step.step }}</div>
              </div>
              <div class="process-step__right"></div>
            } @else {
              <div class="process-step__left"></div>
              <div class="process-step__center">
                <div class="process-dot">{{ step.step }}</div>
              </div>
              <div class="process-content process-step__right">
                <div class="process-content__num">Step {{ step.step }}</div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
              </div>
            }
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './process.component.scss',
})
export class ProcessComponent {
  readonly steps = PROCESS_STEPS;
}
