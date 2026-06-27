import { Component, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
    @if (visible()) {
      <div class="loader" [class.loader--hide]="hiding()">
        <div class="loader__glow"></div>
        <div class="loader__logo">
          Well<span>Med</span> Pharma
        </div>
        <div class="loader__tagline">Healthcare Beyond Medicine</div>
        <div class="loader__bar-wrap">
          <div class="loader__bar"></div>
        </div>
        <div class="loader__cross">
          <i class="fas fa-plus"></i>
        </div>
      </div>
    }
  `,
  styles: `
    .loader {
      position: fixed;
      inset: 0;
      z-index: 9000;
      background: var(--navy-deep);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 28px;
      transition: opacity 0.7s ease;

      &--hide {
        opacity: 0;
        pointer-events: none;
      }
    }

    .loader__glow {
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(27, 169, 127, 0.15) 0%, transparent 70%);
      animation: pulse 2s ease-in-out infinite;
    }

    .loader__logo {
      font-family: var(--font-serif);
      font-size: clamp(2rem, 5vw, 2.8rem);
      font-weight: 600;
      letter-spacing: 0.08em;
      color: var(--white);
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 0.8s 0.3s forwards;
      position: relative;
      z-index: 1;

      span {
        color: var(--emerald);
      }
    }

    .loader__tagline {
      font-size: 0.78rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--grey);
      opacity: 0;
      animation: fadeUp 0.8s 0.6s forwards;
      position: relative;
      z-index: 1;
    }

    .loader__bar-wrap {
      width: 200px;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      overflow: hidden;
      opacity: 0;
      animation: fadeUp 0.5s 0.8s forwards;
      position: relative;
      z-index: 1;
    }

    .loader__bar {
      height: 100%;
      background: linear-gradient(90deg, var(--emerald), var(--gold));
      width: 0;
      animation: loadBar 1.6s 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    .loader__cross {
      position: absolute;
      font-size: 8rem;
      color: rgba(27, 169, 127, 0.04);
      animation: spinSlow 20s linear infinite;
    }

    @keyframes loadBar {
      to {
        width: 100%;
      }
    }
    @keyframes fadeUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes pulse {
      0%,
      100% {
        transform: scale(1);
        opacity: 0.6;
      }
      50% {
        transform: scale(1.1);
        opacity: 1;
      }
    }
    @keyframes spinSlow {
      to {
        transform: rotate(360deg);
      }
    }
  `,
})
export class LoaderComponent implements OnInit {
  readonly visible = signal(true);
  readonly hiding = signal(false);

  ngOnInit(): void {
    setTimeout(() => {
      this.hiding.set(true);
      setTimeout(() => this.visible.set(false), 700);
    }, 2600);
  }
}
