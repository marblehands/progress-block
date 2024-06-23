import BaseComponent from '@components/baseComponent/baseComponent';
import ControlComponent from '../controlComponent/controlComponent';
import styles from './_controlPanel.module.scss';
import Canvas, { CanvasComponent } from '../canvasComponent/canvasComponent';
import { ProgressCircle } from '../progressCircle/progressCircle';
import { createControlComponent } from '@utils/utils';
import { AnimationService } from '../services/animationService';

export default class ControlPanelComponent extends BaseComponent<'section'> {
  private value: number;
  private circle!: ProgressCircle;
  private valueControl: ControlComponent;
  private animateControl: ControlComponent;
  private hideControl: ControlComponent;
  private animation!: AnimationService;

  constructor(private canvas: CanvasComponent) {
    super({ tag: 'section', classes: [styles.controlPanel] });
    this.value = 100;
    this.canvas = Canvas;
    this.valueControl = createControlComponent(
      { label: 'Value', id: 'value', value: this.value },
      'text',
      this.valueControlOnChange,
    );
    this.animateControl = createControlComponent(
      { label: 'Animate', id: 'animate' },
      'checkbox',
      undefined,
      this.animateControlOnChange,
    );
    this.hideControl = createControlComponent(
      { label: 'Hide', id: 'hide' },
      'checkbox',
      undefined,
      this.hideControlOnChange,
    );
    this.renderComponent();
  }

  private renderCircle(): void {
    const angleRadians = (this.value / 100) * 2 * Math.PI - Math.PI / 2;
    this.circle = new ProgressCircle(Canvas.getContext(), 60, 60, 50, angleRadians);
    this.animation = new AnimationService(this.circle, 0.01);
  }

  private updateCircle(): void {
    const angleRadians = (this.value / 100) * 2 * Math.PI;
    console.log(this.value);
    this.circle.updateArcWIdth(angleRadians);
  }

  private renderComponent(): void {
    this.renderCircle();
    this.append([
      this.canvas.getElement(),
      this.valueControl.getElement(),
      this.animateControl.getElement(),
      this.hideControl.getElement(),
    ]);
  }

  private valueControlOnChange = (newValue: number) => {
    this.value = newValue;
    this.updateCircle();
  };

  private hideControlOnChange = (isChecked: boolean) => {
    this.hide(isChecked);
  };

  private animateControlOnChange = (isChecked: boolean) => {
    this.animate(isChecked);
  };

  private hide(isChecked: boolean): void {
    if (isChecked) {
      this.addStyles(['hide']);
    } else {
      this.removeStyles(['hide']);
    }
  }

  private animate(isChecked: boolean): void {
    if (isChecked) {
      this.animation.start();
    } else {
      this.animation.stop();
    }
  }
}

export const ControlPanel = (): ControlPanelComponent => new ControlPanelComponent(Canvas);
