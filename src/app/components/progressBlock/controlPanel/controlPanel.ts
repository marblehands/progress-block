import BaseComponent from '@components/baseComponent/baseComponent';
import ControlComponent, { valueControl, animateControl, hideControl } from '../controlComponent/controlComponent';
import styles from './_controlPanel.module.scss';

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

export const ControlPanel = (): ControlPanelComponent =>
  new ControlPanelComponent(valueControl, animateControl, hideControl);
