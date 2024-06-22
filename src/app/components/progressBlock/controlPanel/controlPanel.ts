import BaseComponent from '@components/baseComponent/baseComponent';
import ControlComponent from '../controlComponent/controlComponent';
import styles from './_controlPanel.module.scss';
import Canvas, { CanvasComponent } from '../canvasComponent/canvasComponent';
import { DrawCircleService } from '../progressCircle/progressCircle';
import { createControlComponent } from '@utils/utils';

export default class ControlPanelComponent extends BaseComponent<'section'> {
  private value: number;
  private valueControl: ControlComponent;
  private animateControl: ControlComponent;
  private hideControl: ControlComponent;

  constructor(private canvas: CanvasComponent) {
    super({ tag: 'section', classes: [styles.controlPanel] });
    this.value = 100;
    this.canvas = Canvas;
    this.valueControl = createControlComponent(
      { label: 'Value', id: 'value', value: this.value },
      'text',
      this.valueControlOnChange,
    );
    this.animateControl = createControlComponent({ label: 'Animate', id: 'animate' }, 'checkbox');
    this.hideControl = createControlComponent({ label: 'Hide', id: 'hide' }, 'checkbox');
    this.renderCircle();
    this.renderComponent();
  }

  private renderCircle(): void {
    const angleRadians = (this.value / 100) * 2 * Math.PI - Math.PI / 2;
    console.log(this.value);
    new DrawCircleService(Canvas.getContext(), 60, 60, 50, angleRadians);
  }

  private renderComponent(): void {
    this.append([
      this.canvas.getElement(),
      this.valueControl.getElement(),
      this.animateControl.getElement(),
      this.hideControl.getElement(),
    ]);
  }

  private valueControlOnChange = (newValue: number) => {
    this.value = newValue;
    this.renderCircle();
  };
}

export const ControlPanel = (): ControlPanelComponent => new ControlPanelComponent(Canvas);
