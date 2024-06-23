import BaseComponent from '../../../baseComponent/baseComponent';
import styles from './_canvas.module.scss';

export class CanvasComponent extends BaseComponent<'canvas'> {
  private context: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    super({ tag: 'canvas', classes: [styles.canvas], attributes: { width: `${width}`, height: `${height}` } });
    this.context = this.getElement().getContext('2d') as CanvasRenderingContext2D;
  }

  public getContext(): CanvasRenderingContext2D {
    return this.context;
  }
}

const Canvas = new CanvasComponent(130, 130);
export default Canvas;
