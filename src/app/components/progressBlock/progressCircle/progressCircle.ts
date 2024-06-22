import Canvas from '../canvasComponent/canvasComponent';

export class ProgressCircleComponent {
  private lineWidth: number;
  private startAngle: number;
  private color: string;
  constructor(
    private context: CanvasRenderingContext2D,
    private x: number,
    private y: number,
    private radius: number,
    private endAngle: number,
  ) {
    this.lineWidth = 10;
    this.startAngle = -Math.PI / 2;
    this.endAngle = endAngle;
    this.color = '#005DFF';
    this.draw();
  }

  private draw() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.context.lineWidth = this.lineWidth;
    this.context.strokeStyle = '#EEF3F6';
    this.context.stroke();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, false);
    this.context.lineWidth = this.lineWidth;
    this.context.strokeStyle = this.color;
    this.context.stroke();
    this.context.closePath();
  }
}
