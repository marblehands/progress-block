import styles from './_valueControl.module.scss';

import BaseComponent from '@app/components/baseComponent/baseComponent';
import { input, label } from '@app/components/tags/tags';

const OPTIONS = {
  valueInput: {
    label: 'Value',
    id: 'value',
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
  ) {
    super({ tag: 'div', classes: [styles.inputGroup] });
    this.render();
  }

  private render(): void {
    this.append([this.label.getElement(), this.input.getElement()]);
  }
}

const valueInput = input(['input'], { type: 'text', id: OPTIONS.valueInput.id });
const valueInputLabel = label(['label'], OPTIONS.valueInput.label, { for: OPTIONS.valueInput.id });

const animateToggle = input(['input'], { type: 'checkbox', id: OPTIONS.animateToggle.id });
const animateToggleLabel = label(['label'], OPTIONS.animateToggle.label, { for: OPTIONS.animateToggle.id });

const hideToggle = input(['input'], { type: 'checkbox', id: OPTIONS.hideToggle.id });
const hideToggleLabel = label(['label'], OPTIONS.hideToggle.label, { for: OPTIONS.hideToggle.id });

export const valueControl = new ControlComponent(valueInput, valueInputLabel);
export const animateControl = new ControlComponent(animateToggle, animateToggleLabel);
export const hideControl = new ControlComponent(hideToggle, hideToggleLabel);
