import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AnimationService } from '../../core/services/animation.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: `
    <div class="loading-screen" [class.loading-screen--hidden]="isHidden">
      <div class="loading-content">
        <div class="loading-logo">
          <img src="/icon3.png" alt="WellMed Pharma" class="loading-logo__img" />
        </div>
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
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
      transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), visibility 1s;
      
      &--hidden {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }
    }

    .loading-content {
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.8s ease;
    }

    .loading-logo {
      width: 100px;
      height: 100px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &::after {
        content: '';
        position: absolute;
        inset: -15px;
        border-radius: 50%;
        border: 1px solid rgba(29, 186, 140, 0.2);
        animation: pulseRing 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
      
      &::before {
        content: '';
        position: absolute;
        inset: -30px;
        border-radius: 50%;
        border: 1px solid rgba(29, 186, 140, 0.1);
        animation: pulseRing 2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s infinite;
      }
      
      &__img {
        width: 70%;
        height: 70%;
        object-fit: contain;
        filter: drop-shadow(0 8px 24px rgba(29, 186, 140, 0.35));
        animation: breathe 3s ease-in-out infinite;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes breathe {
      0%, 100% {
        transform: scale(1);
        opacity: 0.9;
      }
      50% {
        transform: scale(1.05);
        opacity: 1;
      }
    }

    @keyframes pulseRing {
      0% {
        transform: scale(0.9);
        opacity: 1;
      }
      100% {
        transform: scale(1.1);
        opacity: 0;
      }
    }
  `],
})
export class LoadingComponent implements OnInit, OnDestroy {
  isHidden = false;
  private loadingComplete = false;

  constructor(private anim: AnimationService) {}

  ngOnInit(): void {
    setTimeout(() => this.hideLoading(), 2000);
  }

  ngOnDestroy(): void {
    this.loadingComplete = true;
  }

  @HostListener('window:load')
  onWindowLoad(): void {
    setTimeout(() => this.hideLoading(), 1500);
  }

  private hideLoading(): void {
    if (this.loadingComplete) return;
    this.loadingComplete = true;
    this.isHidden = true;
    
    setTimeout(() => {
      const el = document.querySelector('.loading-screen');
      if (el) el.remove();
    }, 600);
  }
}