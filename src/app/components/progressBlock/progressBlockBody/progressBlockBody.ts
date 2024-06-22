import BaseComponent from '@components/baseComponent/baseComponent';
import styles from './_progressBlockBody.module.scss';
import ControlPanelComponent, { controlPanel } from './controlPanel/controlPanel';

export default class ProgressBlockBodyComponent extends BaseComponent<'main'> {
  constructor(private controlPanel: ControlPanelComponent) {
    super({ tag: 'main', classes: [styles.main] });
    this.render();
  }

  private render(): void {
    this.append([this.controlPanel.getElement()]);
  }
}

export const ProgressBlockBody = (): ProgressBlockBodyComponent => new ProgressBlockBodyComponent(controlPanel());
