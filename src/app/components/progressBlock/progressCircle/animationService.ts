import { ProgressCircle } from './progressCircle';

export class Animation {
  private circle: ProgressCircle;
  private speed: number;

  constructor(circle: ProgressCircle, speed: number = 0.01) {
    this.circle = circle;
    this.speed = speed;
  }

  start() {
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.circle.update(this.speed);
    requestAnimationFrame(this.animate.bind(this));
  }
}
