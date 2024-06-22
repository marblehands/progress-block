import BaseComponent from '@components/baseComponent/baseComponent';
import ControlComponent, { valueControl, animateControl, hideControl } from '../controlComponent/controlComponent';
import styles from './_controlPanel.module.scss';
import Canvas, { CanvasComponent } from '../canvasComponent/canvasComponent';
import { ProgressCircleComponent } from '../progressCircle/progressCircle';

export default class ControlPanelComponent extends BaseComponent<'section'> {
  private value: number;
  constructor(
    private valueControl: ControlComponent,
    private animateControl: ControlComponent,
    private hideControl: ControlComponent,
    private canvas: CanvasComponent,
  ) {
    super({ tag: 'section', classes: [styles.controlPanel] });
    this.value = 100;
    this.canvas = Canvas;
    this.render();
  }

  private render(): void {
    const angleRadians = (this.value / 100) * 2 * Math.PI - Math.PI / 2;
    const circle = new ProgressCircleComponent(Canvas.getContext(), 60, 60, 50, angleRadians);

    this.append([
      this.canvas.getElement(),
      this.valueControl.getElement(),
      this.animateControl.getElement(),
      this.hideControl.getElement(),
    ]);
  }
}

export const ControlPanel = (): ControlPanelComponent =>
  new ControlPanelComponent(valueControl, animateControl, hideControl, Canvas);
