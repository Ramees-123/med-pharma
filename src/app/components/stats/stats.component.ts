import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { STATS } from '../../core/data/site-data';
import { AnimationService } from '../../core/services/animation.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  template: `
    <div id="stats" class="stats" #statsSection>
      <div class="stats__inner">
        @for (stat of stats; track stat.label) {
          <div class="stats__item">
            <div class="stats__num" [attr.data-target]="stat.target" [attr.data-suffix]="stat.suffix">
              0{{ stat.suffix }}
            </div>
            <div class="stats__lbl">{{ stat.label }}</div>
          </div>
        }
      </div>
    </div>
  `,
  styleUrl: './stats.component.scss',
})
export class StatsComponent implements AfterViewInit {
  private readonly anim = inject(AnimationService);
  private readonly sectionRef = viewChild<ElementRef<HTMLElement>>('statsSection');
  private counted = false;

  readonly stats = STATS;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.counted) {
          this.counted = true;
          const el = this.sectionRef()?.nativeElement;
          el?.querySelectorAll<HTMLElement>('.stats__num').forEach((numEl) => {
            const target = +numEl.dataset['target']!;
            const suffix = numEl.dataset['suffix']!;
            this.anim.animateCounter(numEl, target, suffix);
          });
        }
      },
      { threshold: 0.2 }
    );
    const section = this.sectionRef()?.nativeElement;
    if (section) observer.observe(section);
  }
}
