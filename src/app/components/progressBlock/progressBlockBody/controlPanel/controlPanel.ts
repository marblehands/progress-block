import BaseComponent from '@app/components/baseComponent/baseComponent';
import styles from './_controlPanel.module.scss';
import ValueControl, { valueControl } from './valueControl/valueControl';

export default class ControlPanelComponent extends BaseComponent<'section'> {
  constructor(private valueControl: ValueControl) {
    super({ tag: 'section', classes: [styles.controlPanel] });
    this.render();
  }

  private render(): void {
    this.append([this.valueControl.getElement()]);
  }
}

export const controlPanel = (): ControlPanelComponent => new ControlPanelComponent(valueControl);
