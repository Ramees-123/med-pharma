import { Component, HostListener, signal } from '@angular/core';
import { CONTACT } from '../../core/data/site-data';

@Component({
  selector: 'app-floating-buttons',
  standalone: true,
  template: `
    <a
      [href]="contact.whatsappLink"
      class="float-wa"
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
    >
      <i class="fab fa-whatsapp"></i>
    </a>

    <button
      type="button"
      class="back-top"
      [class.back-top--visible]="visible()"
      (click)="scrollTop()"
      aria-label="Back to top"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  `,
  styleUrl: './floating-buttons.component.scss',
})
export class FloatingButtonsComponent {
  readonly contact = CONTACT;
  readonly visible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(window.scrollY > 300);
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
