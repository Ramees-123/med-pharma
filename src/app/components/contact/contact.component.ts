import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CONTACT } from '../../core/data/site-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="contact section-blue">
      <div class="contact__inner">
        <div class="contact__header" data-aos="fade-up">
          <div class="section-label section-label--center">Contact Us</div>
          <h2 class="section-h2">Need Medicines<br />from <em>India</em>?</h2>
          <p class="section-body contact__intro">
            Our team is ready to help. Contact us for medicine availability, prescription verification,
            international shipping, and documentation support.
          </p>
        </div>

        <div class="contact__grid">
          <div class="contact__info" data-aos="fade-up">
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
                  <a [href]="contact.whatsappLink" target="_blank" rel="noopener">{{ contact.whatsapp }}</a>
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

          <div class="contact__cta" data-aos="fade-up" data-aos-delay="100">
            <div class="contact__cta-card">
              <div class="contact__cta-accent"></div>
              <h3>Get In Touch</h3>
              <p>Contact us for:</p>
              <ul>
                <li><i class="fas fa-check-circle"></i> Medicine availability</li>
                <li><i class="fas fa-check-circle"></i> International shipping</li>
                <li><i class="fas fa-check-circle"></i> Documentation support</li>
                <li><i class="fas fa-check-circle"></i> SFDA assistance</li>
                <li><i class="fas fa-check-circle"></i> MOH shipment guidance</li>
                <li><i class="fas fa-check-circle"></i> Courier processing</li>
                <li><i class="fas fa-check-circle"></i> Door-to-door medicine delivery</li>
              </ul>
              <p class="contact__cta-footer">
                We are committed to delivering genuine medicines safely, legally, and on time.
              </p>
              <div class="contact__cta-actions">
                <a [href]="'tel:' + contact.phoneIndia" class="btn-primary-wmp">
                  <i class="fas fa-phone"></i> Call Us
                </a>
                <a [href]="contact.whatsappLink" class="btn-wa-wmp" target="_blank" rel="noopener">
                  <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
              </div>
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
}
