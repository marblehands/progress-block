import styles from './_valueControl.module.scss';

import BaseComponent from '@app/components/baseComponent/baseComponent';
import { input, label } from '@app/components/tags/tags';

const VALUE_LABEL_CONTENT = 'Value';
const VALUE_ID = 'value';

export default class ValueControl extends BaseComponent<'div'> {
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

const inputControl = input(['input'], { id: VALUE_ID });
const inputLabel = label(['label'], VALUE_LABEL_CONTENT, { for: VALUE_ID });
export const valueControl = new ValueControl(inputControl, inputLabel);
