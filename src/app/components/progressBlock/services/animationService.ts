import type { ProgressCircle } from '../progressBlockView/progressCircle/progressCircle';

export class AnimationService {
  private circle: ProgressCircle;

  private speed: number;

  private animationId: number | null;

  constructor(circle: ProgressCircle, speed: number = 0.01) {
    this.circle = circle;
    this.speed = speed;
    this.animationId = null;
  }

  public start(): void {
    if (this.animationId === null) {
      this.animate();
    }
  }

  public stop(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  private animate(): void {
    this.circle.update(this.speed);
    this.animationId = requestAnimationFrame(this.animate.bind(this));
  }
}
