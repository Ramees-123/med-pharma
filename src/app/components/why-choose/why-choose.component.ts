import { Component } from '@angular/core';
import { WHY_CARDS } from '../../core/data/site-data';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  template: `
    <section id="why" class="why">
      <div class="why__header" data-reveal data-aos="fade-up">
        <div class="section-label section-label--center">Why Choose Us</div>
        <h2 class="section-h2">The <em>Well Med</em> Difference</h2>
        <p class="section-body why__desc">
          Six reasons thousands of healthcare professionals and families trust us.
        </p>
      </div>

      <div class="why__grid">
        @for (card of cards; track card.title) {
          <div class="why-card glass-card" data-aos="fade-up" [attr.data-aos-delay]="$index * 80">
            <div class="why-card__icon"><i class="fas" [class]="card.icon"></i></div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './why-choose.component.scss',
})
export class WhyChooseComponent {
  readonly cards = WHY_CARDS;
}
