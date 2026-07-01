import { Component, HostListener, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar-wmp" [class.navbar-wmp--scrolled]="scrolled()" [class.navbar-wmp--open]="menuOpen()">
      <a href="#hero" class="navbar-wmp__logo" (click)="closeMenu()">
        <img src="/icon3.png" alt="Well Med Pharma" class="navbar-wmp__logo-image" />
        <span class="navbar-wmp__logo-text">Well<span>Med</span> Pharma</span>
      </a>

      <ul class="navbar-wmp__links">
        @for (link of links; track link.href) {
          <li>
            <a [href]="link.href" (click)="closeMenu()">{{ link.label }}</a>
          </li>
        }
        <li>
          <a href="#contact" class="navbar-wmp__cta" (click)="closeMenu()">Contact</a>
        </li>
      </ul>

      <button
        class="navbar-wmp__hamburger"
        type="button"
        [attr.aria-expanded]="menuOpen()"
        aria-label="Toggle menu"
        (click)="toggleMenu()"
      >
        <span [class.is-open]="menuOpen()"></span>
        <span [class.is-open]="menuOpen()"></span>
        <span [class.is-open]="menuOpen()"></span>
      </button>
    </nav>

    @if (menuOpen()) {
      <div class="mobile-menu" (click)="closeMenu()">
        <div class="mobile-menu__panel" (click)="$event.stopPropagation()">
          @for (link of links; track link.href) {
            <a [href]="link.href" (click)="closeMenu()">{{ link.label }}</a>
          }
          <a href="#contact" class="mobile-menu__cta" (click)="closeMenu()">Contact Us</a>
          <button class="mobile-menu__close" type="button" (click)="closeMenu()">✕ Close</button>
        </div>
      </div>
    }
  `,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnDestroy {
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  readonly links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 992) this.closeMenu();
  }

  ngOnDestroy(): void {
    document.body.classList.remove('menu-open');
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
    document.body.classList.toggle('menu-open', this.menuOpen());
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.classList.remove('menu-open');
  }
}
