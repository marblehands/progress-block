import { ProgressCircle } from './progressCircle';

export class Animation {
  private circle: ProgressCircle;
  private speed: number;
  private animationId: number | null;

  constructor(circle: ProgressCircle, speed: number = 0.01) {
    this.circle = circle;
    this.speed = speed;
    this.animationId = null;
  }

  start() {
    if (this.animationId === null) {
      this.animate();
    }
  }

  stop() {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  private animate() {
    this.circle.update(this.speed);
    this.animationId = requestAnimationFrame(this.animate.bind(this));
  }
}
