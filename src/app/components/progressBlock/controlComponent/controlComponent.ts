import BaseComponent from '@components/baseComponent/baseComponent';
import { createControlComponent } from '@utils/utils';
import styles from './_controlComponent.module.scss';

const OPTIONS = {
  valueInput: {
    label: 'Value',
    id: 'value',
    value: 100,
  },
  animateToggle: {
    label: 'Animate',
    id: 'animate',
  },
  hideToggle: {
    label: 'Hide',
    id: 'hide',
  },
};

export default class ControlComponent extends BaseComponent<'div'> {
  constructor(
    private input: BaseComponent<'input'>,
    private label: BaseComponent<'label'>,
    public value: number,
  ) {
    super({ tag: 'div', classes: [styles.inputGroup] });
    this.value = +input.element.value || 0;
    this.render();
  }

  private render(): void {
    this.append([this.label.getElement(), this.input.getElement()]);
  }
}

export const valueControl = createControlComponent(OPTIONS.valueInput, 'text');
export const animateControl = createControlComponent(OPTIONS.animateToggle, 'checkbox');
export const hideControl = createControlComponent(OPTIONS.hideToggle, 'checkbox');
