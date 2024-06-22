import ControlComponent from '@components/progressBlock/controlComponent/controlComponent';
import { input, label } from '@components/tags';

type ValueChangeCallback = (value: number) => void;
type HideCheckboxChangeCallback = (isChecked: boolean) => void;

export function createControlComponent(
  option: { label: string; id: string; value?: number },
  type: 'text' | 'checkbox',
  valueControlOnChangeCallback?: ValueChangeCallback,
  hideControlOnChangeCallback?: HideCheckboxChangeCallback,
) {
  const labelElement = label(['label'], option.label, { for: option.id });
  const inputProps: { type: 'text' | 'checkbox'; id: string; value?: string } = { type, id: option.id };

  if (option.value !== undefined) {
    inputProps.value = option.value.toString();
  }

  const inputElement = input(['input'], inputProps);
  const controlComponent = new ControlComponent(inputElement, labelElement);

  if (valueControlOnChangeCallback && type === 'text') {
    inputElement.addListener('input', (event) => {
      const target = event.target as HTMLInputElement;
      const newValue = +target.value > 100 ? 100 : +target.value < 0 ? 0 : +target.value;
      valueControlOnChangeCallback(newValue);
    });
  }

  if (type === 'checkbox' && hideControlOnChangeCallback) {
    inputElement.addListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      const isChecked = target.checked;
      hideControlOnChangeCallback(isChecked);
    });
  }

  return controlComponent;
}
