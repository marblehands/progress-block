import BaseComponent from '@components/baseComponent/baseComponent';
import ControlComponent from '../controlComponent/controlComponent';
import styles from './_controlPanel.module.scss';
import Canvas, { CanvasComponent } from '../canvasComponent/canvasComponent';
import { ProgressCircle } from '../progressCircle/progressCircle';
import { createControlComponent } from '@utils/utils';
import { Animation } from '../progressCircle/animationService';

export default class ControlPanelComponent extends BaseComponent<'section'> {
  private value: number;

  private circle!: ProgressCircle;
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
    this.renderCircle();
    this.renderComponent();
  }

  private renderCircle(): void {
    const angleRadians = (this.value / 100) * 2 * Math.PI - Math.PI / 2;
    console.log(this.value);
    this.circle = new ProgressCircle(Canvas.getContext(), 60, 60, 50, angleRadians);
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
    const animation = new Animation(this.circle, 0.01);
    if (isChecked) {
      animation.start();
    }
  }
}

export const ControlPanel = (): ControlPanelComponent => new ControlPanelComponent(Canvas);
