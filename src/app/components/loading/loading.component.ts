import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AnimationService } from '../../core/services/animation.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: `
    <div class="loading-screen" [class.loading-screen--hidden]="isHidden">
      <div class="loading-content">
        <div class="loading-logo">
          <div class="loading-logo__ring loading-logo__ring--1"></div>
          <div class="loading-logo__ring loading-logo__ring--2"></div>
          <div class="loading-logo__ring loading-logo__ring--3"></div>
          <img src="/icon3.png" alt="WellMed Pharma" class="loading-logo__img" />
        </div>
        <div class="loading-text">
          <h1 class="loading-text__brand">WellMed Pharma</h1>
          <p class="loading-text__tagline">Trusted Medicine Delivery from India</p>
        </div>
        <div class="loading-bar">
          <div class="loading-bar__fill" [style.width.%]="progress"></div>
        </div>
        <p class="loading-status">{{ statusText }}</p>
      </div>
    </div>
  `,
  styles: [`
    .loading-screen {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(ellipse 120% 60% at 50% 30%, #102A4C 0%, #081B33 50%, #060F1F 100%);
      transition: opacity 0.8s cubic-bezier(0.65, 0, 0.35, 1), visibility 0.8s;
      
      &--hidden {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }
    }

    .loading-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0;
      animation: contentFadeIn 0.6s ease-out;
    }

    .loading-logo {
      width: 110px;
      height: 110px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 28px;

      &__ring {
        position: absolute;
        border-radius: 50%;
        border: 2px solid transparent;
        
        &--1 {
          inset: -8px;
          border-top-color: var(--accent);
          border-right-color: var(--accent-light);
          animation: spin 1.2s cubic-bezier(0.6, 0, 0.4, 1) infinite;
          box-shadow: 0 0 20px rgba(29,186,140,0.2), inset 0 0 20px rgba(29,186,140,0.05);
        }
        
        &--2 {
          inset: -18px;
          border-bottom-color: var(--gold);
          border-left-color: var(--gold-light);
          animation: spin 1.8s cubic-bezier(0.6, 0, 0.4, 1) infinite reverse;
          box-shadow: 0 0 25px rgba(214,179,71,0.15), inset 0 0 15px rgba(214,179,71,0.03);
        }
        
        &--3 {
          inset: -28px;
          border-top-color: rgba(255,255,255,0.2);
          border-bottom-color: rgba(255,255,255,0.1);
          animation: spin 2.4s linear infinite;
          opacity: 0.4;
        }
      }

      &__img {
        width: 60%;
        height: 60%;
        object-fit: contain;
        filter: drop-shadow(0 8px 32px rgba(29, 186, 140, 0.4));
        animation: pulseGlow 2s ease-in-out infinite;
        border-radius: 50%;
      }
    }

    .loading-text {
      text-align: center;
      margin-bottom: 36px;

      &__brand {
        font-family: var(--font-serif);
        font-size: clamp(1.4rem, 4vw, 1.8rem);
        font-weight: 700;
        color: var(--white);
        letter-spacing: 0.04em;
        margin-bottom: 6px;
        text-shadow: 0 2px 20px rgba(0,0,0,0.4);
      }

      &__tagline {
        font-size: clamp(0.62rem, 1.6vw, 0.7rem);
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.45);
        font-weight: 500;
      }
    }

    .loading-bar {
      width: 200px;
      max-width: 70vw;
      height: 3px;
      background: rgba(255,255,255,0.08);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 14px;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);

      &__fill {
        height: 100%;
        background: linear-gradient(90deg, var(--accent), var(--accent-light), var(--accent));
        border-radius: 4px;
        transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 0 12px rgba(29,186,140,0.5);
        background-size: 200% 100%;
        animation: shimmer 1.5s ease-in-out infinite;
      }
    }

    .loading-status {
      font-size: 0.65rem;
      letter-spacing: 0.12em;
      color: rgba(255,255,255,0.3);
      font-weight: 400;
      transition: opacity 0.3s ease;
    }

    @keyframes contentFadeIn {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }

    @keyframes pulseGlow {
      0%, 100% { filter: drop-shadow(0 8px 32px rgba(29, 186, 140, 0.4)) brightness(1); }
      50%      { filter: drop-shadow(0 8px 48px rgba(29, 186, 140, 0.6)) brightness(1.08); }
    }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .loading-logo__img {
        animation: none;
      }
      .loading-logo__ring {
        animation: none !important;
        border-color: rgba(29,186,140,0.3);
      }
      .loading-logo__ring--2 {
        border-color: rgba(214,179,71,0.3);
      }
      .loading-bar__fill {
        animation: none;
        background: var(--accent);
      }
    }

    @media (max-width: 480px) {
      .loading-logo {
        width: 80px;
        height: 80px;
        margin-bottom: 22px;
        
        &__ring--1 { inset: -6px; }
        &__ring--2 { inset: -14px; }
        &__ring--3 { inset: -22px; }
      }
      
      .loading-bar {
        width: 160px;
      }
    }
  `],
})
export class LoadingComponent implements OnInit, OnDestroy {
  isHidden = false;
  progress = 0;
  statusText = 'Preparing...';
  private loadingComplete = false;
  private progressInterval: ReturnType<typeof setInterval> | null = null;

  constructor(private anim: AnimationService) {}

  ngOnInit(): void {
    this.startProgress();
    setTimeout(() => this.hideLoading(), 2200);
  }

  ngOnDestroy(): void {
    this.loadingComplete = true;
    this.clearProgress();
  }

  @HostListener('window:load')
  onWindowLoad(): void {
    setTimeout(() => this.hideLoading(), 1200);
  }

  private startProgress(): void {
    const statuses = [
      { at: 20, text: 'Loading assets...' },
      { at: 45, text: 'Preparing experience...' },
      { at: 70, text: 'Almost ready...' },
      { at: 90, text: 'Final touches...' },
    ];

    this.progressInterval = setInterval(() => {
      if (this.loadingComplete) return;
      
      if (this.progress < 92) {
        // Slow down as we approach 92%
        const increment = Math.max(0.5, (92 - this.progress) * 0.06);
        this.progress = Math.min(92, this.progress + increment);
      }

      // Update status text
      const currentStatus = statuses.find(s => this.progress >= s.at);
      if (currentStatus) {
        this.statusText = currentStatus.text;
      }
    }, 80);
  }

  private clearProgress(): void {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  private hideLoading(): void {
    if (this.loadingComplete) return;
    this.loadingComplete = true;
    this.clearProgress();

    // Complete the progress bar
    this.progress = 100;
    this.statusText = 'Welcome!';

    setTimeout(() => {
      this.isHidden = true;
    }, 400);

    setTimeout(() => {
      const el = document.querySelector('.loading-screen');
      if (el) el.remove();
    }, 1200);
  }
}