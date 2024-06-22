import BaseComponent from '@app/components/baseComponent/baseComponent';
import styles from './_controlPanel.module.scss';
import ControlComponent, { valueControl, animateControl, hideControl } from './valueControl/valueControl';

export default class ControlPanelComponent extends BaseComponent<'section'> {
  constructor(
    private valueControl: ControlComponent,
    private animateControl: ControlComponent,
    private hideControl: ControlComponent,
  ) {
    super({ tag: 'section', classes: [styles.controlPanel] });
    this.render();
  }

  private render(): void {
    this.append([this.valueControl.getElement(), this.animateControl.getElement(), this.hideControl.getElement()]);
  }
}

export const controlPanel = (): ControlPanelComponent =>
  new ControlPanelComponent(valueControl, animateControl, hideControl);
