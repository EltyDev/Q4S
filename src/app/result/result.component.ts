import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, Renderer2, Signal, signal, viewChild } from '@angular/core';
import { Points } from '../app.component';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { PartyService, PartyType } from '../shared/services/PartyService';

@Component({
  selector: 'app-result',
  standalone: true,
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("openClose", [
      state("open", style({
        height: "*",
      })),
      state("closed", style({
        height: "0",
      })),
      transition("closed => open", [
        animate("0.5s ease-out")
      ]),
      transition("open => closed", [
        animate("0.5s ease-in")
      ])
    ]),
    trigger("fadeInOut", [
      state("open", style({
        opacity: 1,
      })),
      state("closed", style({
        opacity: 0,
      })),
      transition("closed => open", [
        animate("0.5s ease-out")
      ]),
      transition("open => closed", [
        animate("0.5s ease-in")
      ])
    ])
  ],
})
export class ResultComponent  {

  renderer = inject(Renderer2);
  partyService = inject(PartyService);

  points = input.required<Points>();
  displayAbout = signal(false);

  icons = viewChild.required<ElementRef>("icons");
  details = viewChild.required<ElementRef>("details");

  round(num: number) {
    return Math.round(num);
  }

  farLeft = computed(() => this.round(this.points().farLeft! / 50 * 100));
  left = computed(() => this.round(this.points().left! / 50 * 100));
  centerLeft = computed(() => this.round(this.points().centerLeft! / 50 * 100));
  centerRight = computed(() => this.round(this.points().centerRight! / 50 * 100));
  right = computed(() => this.round(this.points().right! / 50 * 100));
  farRight = computed(() => this.round(this.points().farRight! / 50 * 100));

  highestPercentage: Signal<PartyType> = computed(() => {
    switch (Math.max(this.farLeft(), this.left(), this.centerLeft(), this.centerRight(), this.right(), this.farRight())) {
      case this.farLeft(): return "far_left";
      case this.left(): return "left";
      case this.centerLeft(): return "center_left";
      case this.centerRight(): return "center_right";
      case this.right(): return "right";
      case this.farRight(): return "far_right";
      default: return "far_right";
    }
  });

  info = computed(() => { return this.partyService.getInfo(this.highestPercentage()); });

  toggleDisplayAbout() {
    this.displayAbout.update((prev) => !prev);
  }


  scrollElement() {
    const scrollTarget = this.icons().nativeElement;

    const duration = 500;
    const startTime = performance.now();
    const scrollTopStart = window.scrollY;
    const targetOffsetTop = scrollTarget.offsetTop;

    const updateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Valeur entre 0 et 1
      const scrollTop = scrollTopStart + (targetOffsetTop - scrollTopStart) * progress;

      window.scrollTo(0, scrollTop);

      if (progress < 1) {
        requestAnimationFrame(updateScroll);
      }
    };

    requestAnimationFrame(updateScroll);
  }

  onAnimationStart(event: AnimationEvent) {
    if (event.toState === "open") {
      this.scrollElement();
      this.renderer.setStyle(this.details().nativeElement, "padding-bottom", "3rem");
    }
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === "closed") {
      setTimeout(() => {
        this.renderer.setStyle(this.details().nativeElement, "padding-bottom", "0");
    }, 20);
    }
  }
}
