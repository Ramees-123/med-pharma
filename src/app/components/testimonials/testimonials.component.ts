import { Component } from '@angular/core';
import { TESTIMONIALS } from '../../core/data/site-data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `
    <section id="testimonials" class="testimonials">
      <div class="testimonials__header" data-reveal data-aos="fade-up">
        <div class="section-label section-label--center">Customer Stories</div>
        <h2 class="section-h2">Voices of <em>Trust</em></h2>
      </div>

      <div class="testimonials__slider">
        <div class="testimonials__track">
          @for (t of doubled; track $index) {
            <div class="testimonial-card glass-card">
              <div class="testimonial-card__stars">★★★★★</div>
              <p class="testimonial-card__text">{{ t.text }}</p>
              <div class="testimonial-card__author">
                <div class="testimonial-card__avatar">{{ t.initials }}</div>
                <div>
                  <div class="testimonial-card__name">{{ t.name }}</div>
                  <div class="testimonial-card__role">{{ t.role }}</div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  readonly doubled = [...TESTIMONIALS, ...TESTIMONIALS];
}
