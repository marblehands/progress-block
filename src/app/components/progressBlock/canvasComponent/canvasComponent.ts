import BaseComponent from '@components/baseComponent/baseComponent';

export class CanvasComponent extends BaseComponent<'canvas'> {
  private context: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    super({ tag: 'canvas', classes: ['pixelated'], attributes: { width: `${width}`, height: `${height}` } });
    this.context = this.getElement().getContext('2d') as CanvasRenderingContext2D;
  }

  getContext(): CanvasRenderingContext2D {
    return this.context;
  }
}

const Canvas = new CanvasComponent(120, 120);
export default Canvas;
