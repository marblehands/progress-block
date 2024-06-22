import styles from './_canvasComponent.module.scss';
import BaseComponent from '@components/baseComponent/baseComponent';

export class CanvasComponent extends BaseComponent<'canvas'> {
  private context: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    super({ tag: 'canvas', classes: [styles.canvas] });
    this.element.width = width;
    this.element.height = height;
    this.context = this.element.getContext('2d') as CanvasRenderingContext2D;
  }

  getContext(): CanvasRenderingContext2D {
    return this.context;
  }
}

const Canvas = new CanvasComponent(120, 120);
export default Canvas;
