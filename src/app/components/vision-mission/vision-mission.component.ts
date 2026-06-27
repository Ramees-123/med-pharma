import { Component } from '@angular/core';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  template: `
    <section id="vision" class="vision">
      <div class="vision__header" data-reveal data-aos="fade-up">
        <div class="section-label section-label--center">Our Purpose</div>
        <h2 class="section-h2 text-center">Vision & <em>Mission</em></h2>
      </div>

      <div class="vision__grid">
        <div class="vision__card glass-card" data-reveal data-aos="fade-up" data-aos-delay="100">
          <div class="vision__icon"><i class="fas fa-eye"></i></div>
          <h3>Our Vision</h3>
          <p>
            To become the most trusted healthcare brand in South India and the Gulf —
            setting the benchmark for pharmaceutical excellence, innovation, and patient
            dignity across every community we serve.
          </p>
          <div class="vision__glow"></div>
        </div>

        <div class="vision__card vision__card--gold glass-card" data-reveal data-aos="fade-up" data-aos-delay="200">
          <div class="vision__icon"><i class="fas fa-bullseye"></i></div>
          <h3>Our Mission</h3>
          <p>
            To deliver trusted medicines and healthcare solutions with uncompromising
            quality — bridging the gap between world-class pharmaceutical standards and
            the communities who need them most.
          </p>
          <div class="vision__glow vision__glow--gold"></div>
        </div>
      </div>

      <div class="vision__tagline" data-aos="fade-up" data-aos-delay="300">
        <span>Trusted Medicines.</span>
        <span>Healthier Lives.</span>
        <span class="vision__tagline--em">Premium Care.</span>
      </div>
    </section>
  `,
  styleUrl: './vision-mission.component.scss',
})
export class VisionMissionComponent {}
