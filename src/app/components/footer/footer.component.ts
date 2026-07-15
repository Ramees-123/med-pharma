import { Component } from '@angular/core';
import { CONTACT } from '../../core/data/site-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">

      <!-- Top brand strip -->
      <div class="footer__brand-strip">
        <div class="footer__brand-strip-inner">
          <span><i class="fas fa-shield-alt"></i> Safe</span>
          <span class="footer__brand-dot"></span>
          <span><i class="fas fa-gavel"></i> Legal</span>
          <span class="footer__brand-dot"></span>
          <span><i class="fas fa-tag"></i> Affordable</span>
          <span class="footer__brand-dot"></span>
          <span><i class="fas fa-globe"></i> Worldwide Delivery</span>
        </div>
      </div>

      <!-- Main grid -->
      <div class="footer__main">
        <div class="footer__grid">

          <!-- Brand col -->
          <div class="footer__brand">
            <div class="footer__logo">
              <div class="footer__logo-img-wrap">
                <img src="/icon3.png" alt="Well Med Pharma" />
              </div>
              <div class="footer__logo-text">
                <span class="footer__logo-name">WellMed Pharma</span>
                <span class="footer__logo-tagline">Trusted Medicine Delivery</span>
              </div>
            </div>
            <p class="footer__tagline">
              Trusted Personal Medicine Delivery from India — safe, genuine, and fully documented for international patients.
            </p>
            <div class="footer__badges">
              <span class="footer__badge"><i class="fas fa-check-circle"></i> Prescription Verified</span>
              <span class="footer__badge"><i class="fas fa-check-circle"></i> Legal Compliance</span>
              <span class="footer__badge"><i class="fas fa-check-circle"></i> Genuine Medicines</span>
            </div>
            <div class="footer__social">
              <a [href]="contact.whatsappLink" class="footer__social-btn footer__social-btn--wa"
                 target="_blank" rel="noopener" aria-label="WhatsApp">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a [href]="'mailto:' + contact.email" class="footer__social-btn footer__social-btn--email"
                 aria-label="Email">
                <i class="fas fa-envelope"></i>
              </a>
              <a [href]="'tel:' + contact.phoneIndia" class="footer__social-btn footer__social-btn--phone"
                 aria-label="Call India">
                <i class="fas fa-phone"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer__col">
            <h4 class="footer__col-title">Quick Links</h4>
            <ul class="footer__col-list">
              @for (link of quickLinks; track link.href) {
                <li>
                  <a [href]="link.href">
                    <i class="fas fa-chevron-right"></i>{{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Services -->
          <div class="footer__col">
            <h4 class="footer__col-title">Our Services</h4>
            <ul class="footer__col-list">
              @for (service of services; track service.href) {
                <li>
                  <a [href]="service.href">
                    <i class="fas fa-chevron-right"></i>{{ service.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer__col">
            <h4 class="footer__col-title">Get In Touch</h4>
            <ul class="footer__contact-list">
              <li>
                <div class="footer__contact-icon"><i class="fas fa-location-dot"></i></div>
                <div>
                  <span class="footer__contact-label">Address</span>
                  <a href="#contact">Edavanna, Malappuram, Kerala — 676541</a>
                </div>
              </li>
              <li>
                <div class="footer__contact-icon"><i class="fas fa-phone"></i></div>
                <div>
                  <span class="footer__contact-label">India</span>
                  <a [href]="'tel:' + contact.phoneIndia">{{ contact.phoneIndia }}</a>
                </div>
              </li>
              <li>
                <div class="footer__contact-icon footer__contact-icon--wa"><i class="fab fa-whatsapp"></i></div>
                <div>
                  <span class="footer__contact-label">WhatsApp</span>
                  <a [href]="contact.whatsappLink" target="_blank" rel="noopener">{{ contact.whatsapp }}</a>
                </div>
              </li>
              <li>
                <div class="footer__contact-icon footer__contact-icon--wa"><i class="fab fa-whatsapp"></i></div>
                <div>
                  <span class="footer__contact-label">WhatsApp UAE</span>
                  <a [href]="contact.whatsappUaeLink" target="_blank" rel="noopener">{{ contact.phoneUae }}</a>
                </div>
              </li>
              <li>
                <div class="footer__contact-icon"><i class="fas fa-envelope"></i></div>
                <div>
                  <span class="footer__contact-label">Email</span>
                  <a [href]="'mailto:' + contact.email">{{ contact.email }}</a>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Destinations strip -->
      <div class="footer__destinations">
        <div class="footer__destinations-inner">
          <span class="footer__dest-label"><i class="fas fa-plane"></i> We Deliver To:</span>
          @for (dest of destinations; track dest) {
            <span class="footer__dest-item">{{ dest }}</span>
          }
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer__bottom">
        <div class="footer__bottom-inner">
          <p class="footer__copyright">
            &copy; 2025 <span>Well Med Pharma</span>. All rights reserved.
          </p>
          <p class="footer__legal">
            For personal medical use only &bull; All shipments comply with destination country regulations
          </p>
        </div>
      </div>

    </footer>
  `,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly contact = CONTACT;

  readonly quickLinks = [
    { label: 'About Us',    href: '#about' },
    { label: 'Services',    href: '#services' },
    { label: 'Our Process', href: '#process' },
    { label: 'Compliance',  href: '#compliance' },
    { label: 'FAQ',         href: '#faq' },
    { label: 'Contact',     href: '#contact' },
  ];

  readonly services = [
    { label: 'Personal Medicine Supply',      href: '#personal-medicine-supply' },
    { label: 'Medicine Arrangement',          href: '#prescription-medicine-arrangement' },
    { label: 'Ayurvedic Medicine Support',    href: '#ayurvedic-medicine-support' },
    { label: 'International Delivery',        href: '#international-medicine-delivery' },
    { label: 'Documentation & Approvals',     href: '#documentation-approvals' },
    { label: 'Door-to-Door Delivery',         href: '#door-to-door-delivery' },
  ];

  readonly destinations = [
    'India', 'UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Bahrain', 'UK', 'USA', 'Ireland', 'Australia',
  ];
}
