import { Component, signal } from '@angular/core';
import { FAQ_ITEMS } from '../../core/data/site-data';

@Component({
  selector: 'app-faq',
  standalone: true,
  template: `
    <section id="faq" class="faq">
      <div class="faq__header" data-reveal data-aos="fade-up">
        <div class="section-label section-label--light">Common Questions</div>
        <h2 class="section-h2">Frequently Asked <em>Questions</em></h2>
      </div>

      <div class="faq__list">
        @for (item of items; track item.question; let i = $index) {
          <div class="faq__item" data-aos="fade-up" [attr.data-aos-delay]="i * 60">
            <button
              class="faq__q"
              type="button"
              [class.faq__q--open]="openIndex() === i"
              (click)="toggle(i)"
            >
              {{ item.question }}
              <i class="fas fa-plus faq__icon"></i>
            </button>
            <div class="faq__a" [class.faq__a--open]="openIndex() === i">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  readonly items = FAQ_ITEMS;
  readonly openIndex = signal<number | null>(null);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
