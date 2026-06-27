import { Component } from '@angular/core';
import { CONTACT } from '../../core/data/site-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer__grid">
        <div>
          <div class="footer__logo">Well<span>Med</span> Pharma</div>
          <p class="footer__desc">
            Healthcare Beyond Medicine. Trusted pharmaceutical products, genuine care, and
            reliable service — across India and the UAE.
          </p>
          <div class="footer__social">
            <a href="#" class="footer__social-btn" aria-label="Facebook"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="#" class="footer__social-btn" aria-label="Instagram"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              [href]="contact.whatsappLink"
              class="footer__social-btn"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              ><i class="fab fa-whatsapp"></i
            ></a>
            <a
              [href]="'mailto:' + contact.email"
              class="footer__social-btn"
              aria-label="Email"
              ><i class="fas fa-envelope"></i
            ></a>
          </div>
        </div>

        <div class="footer__col">
          <h4>Quick Links</h4>
          <ul>
            @for (link of quickLinks; track link.href) {
              <li><a [href]="link.href">{{ link.label }}</a></li>
            }
          </ul>
        </div>

        <div class="footer__col">
          <h4>Services</h4>
          <ul>
            @for (s of services; track s) {
              <li><a href="#services">{{ s }}</a></li>
            }
          </ul>
        </div>

        <div class="footer__col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+919633875445">{{ contact.phoneIndia }}</a></li>
            <li>
              <a [href]="contact.whatsappLink" target="_blank" rel="noopener">{{
                contact.whatsapp
              }}</a>
            </li>
            <li><a href="tel:+971552986446">{{ contact.phoneUae }} (UAE)</a></li>
            <li><a [href]="'mailto:' + contact.email">{{ contact.email }}</a></li>
            <li><a href="#contact">Edavanna, Malappuram</a></li>
            <li><a href="#contact">Kerala — PIN 676541</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <div>
          © 2025 <span class="footer__emerald">Well Med Pharma</span>. All rights reserved.
          Healthcare Beyond Medicine.
        </div>
        <div>Designed with <span class="footer__emerald">♥</span> for better healthcare.</div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly contact = CONTACT;

  readonly quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Process', href: '#process' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  readonly services = [
    'Prescription Medicines',
    'Healthcare Products',
    'Wellness Solutions',
    'Medical Supplies',
    'Bulk Orders',
    'Customer Support',
  ];
}
