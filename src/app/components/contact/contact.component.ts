import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CONTACT } from '../../core/data/site-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="contact__grid">
        <div>
          <div class="section-label">Get In Touch</div>
          <h2 class="section-h2">Let's Talk <em>Healthcare</em></h2>
          <p class="section-body contact__intro">
            Whether it's a single prescription or a bulk institutional order — we're ready
            to help. Reach us on any channel, any time.
          </p>

          <div class="contact__items">
            <div class="contact__item">
              <div class="contact__icon"><i class="fas fa-location-dot"></i></div>
              <div>
                <label>Address</label>
                <span>Palace Building, Jamalangadi, Edavanna<br />PIN 676541, Malappuram District, Kerala</span>
              </div>
            </div>
            <div class="contact__item">
              <div class="contact__icon"><i class="fas fa-envelope"></i></div>
              <div>
                <label>Email</label>
                <a [href]="'mailto:' + contact.email">{{ contact.email }}</a>
              </div>
            </div>
            <div class="contact__item">
              <div class="contact__icon"><i class="fas fa-phone"></i></div>
              <div>
                <label>India</label>
                <a [href]="'tel:' + contact.phoneIndia">{{ contact.phoneIndia }}</a>
              </div>
            </div>
            <div class="contact__item">
              <div class="contact__icon"><i class="fab fa-whatsapp"></i></div>
              <div>
                <label>WhatsApp</label>
                <a [href]="contact.whatsappLink" target="_blank" rel="noopener">{{
                  contact.whatsapp
                }}</a>
              </div>
            </div>
            <div class="contact__item">
              <div class="contact__icon"><i class="fab fa-whatsapp"></i></div>
              <div>
                <label>WhatsApp UAE</label>
                <a [href]="contact.whatsappUaeLink" target="_blank" rel="noopener">{{ contact.phoneUae }}</a>
              </div>
            </div>
          </div>
        </div>

        <div class="contact__form glass-card">
          <div class="contact__form-accent"></div>
          <h3>Send Us a Message</h3>
          <p class="contact__form-sub">We typically respond within a few hours during business days.</p>

          <div class="row g-3">
            <div class="col-md-6">
              <label class="contact__label">Full Name</label>
              <input type="text" class="contact__input" placeholder="Your name" [(ngModel)]="name" />
            </div>
            <div class="col-md-6">
              <label class="contact__label">Phone Number</label>
              <input type="tel" class="contact__input" placeholder="+91 or international" [(ngModel)]="phone" />
            </div>
            <div class="col-12">
              <label class="contact__label">Email Address</label>
              <input type="email" class="contact__input" placeholder="your@email.com" [(ngModel)]="email" />
            </div>
            <div class="col-12">
              <label class="contact__label">Enquiry Type</label>
              <select class="contact__input" [(ngModel)]="enquiryType">
                <option value="">Select an option</option>
                @for (opt of enquiryOptions; track opt) {
                  <option [value]="opt">{{ opt }}</option>
                }
              </select>
            </div>
            <div class="col-12">
              <label class="contact__label">Message</label>
              <textarea
                class="contact__input contact__textarea"
                placeholder="Describe your requirement in detail..."
                [(ngModel)]="message"
              ></textarea>
            </div>
            <div class="col-12">
              <button
                type="button"
                class="contact__submit"
                [class.contact__submit--sent]="sent()"
                (click)="submit()"
              >
                @if (sent()) {
                  <i class="fas fa-check"></i> Message Sent!
                } @else {
                  <i class="fas fa-paper-plane"></i> Send Message
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="contact__map">
      <iframe
        [src]="mapUrl"
        allowfullscreen
        loading="lazy"
        title="Well Med Pharma Location"
      ></iframe>
    </div>
  `,
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly contact = CONTACT;
  readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    CONTACT.mapUrl
  );

  readonly enquiryOptions = [
    'Prescription Medicine',
    'Healthcare Products',
    'Bulk / Institutional Order',
    'Medical Supplies',
    'Wellness Products',
    'General Enquiry',
  ];

  name = '';
  phone = '';
  email = '';
  enquiryType = '';
  message = '';
  readonly sent = signal(false);

  submit(): void {
    this.sent.set(true);
    setTimeout(() => this.sent.set(false), 3500);
  }
}
