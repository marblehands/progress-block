import BaseComponent from '@components/baseComponent/baseComponent';
import styles from './_controlComponent.module.scss';

export default class ControlComponent extends BaseComponent<'div'> {
  constructor(
    private input: BaseComponent<'input'>,
    private label: BaseComponent<'label'>,
  ) {
    super({ tag: 'div', classes: [styles.inputGroup] });
    this.render();
  }

  private render(): void {
    this.append([this.label.getElement(), this.input.getElement()]);
  }
}
