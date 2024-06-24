import BaseComponent from '../../../baseComponent/baseComponent';
import styles from './_canvas.module.scss';

const ratio = window.devicePixelRatio * 2;

export class CanvasComponent extends BaseComponent<'canvas'> {
  private context: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    super({ tag: 'canvas', classes: [styles.canvas], attributes: { width: `${width}`, height: `${height}` } });
    this.context = this.getElement().getContext('2d') as CanvasRenderingContext2D;
    this.context.imageSmoothingEnabled = true;
    this.context.imageSmoothingQuality = 'high';
  }

  public getContext(): CanvasRenderingContext2D {
    return this.context;
  }
}

const Canvas = new CanvasComponent(130 * ratio, 130 * ratio);
export default Canvas;
