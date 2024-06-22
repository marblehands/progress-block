import ControlComponent from '@components/progressBlock/controlComponent/controlComponent';
import { input, label } from '@components/tags';

type ValueChangeCallback = (newValue: number) => void;

export function createControlComponent(
  option: { label: string; id: string; value?: number },
  type: 'text' | 'checkbox',
  onChange?: ValueChangeCallback,
) {
  const labelElement = label(['label'], option.label, { for: option.id });
  const inputProps: { type: 'text' | 'checkbox'; id: string; value?: string } = { type, id: option.id };

  if (option.value !== undefined) {
    inputProps.value = option.value.toString();
  }

  const inputElement = input(['input'], inputProps);
  const controlComponent = new ControlComponent(inputElement, labelElement);

  if (onChange && type === 'text') {
    inputElement.addListener('input', (event) => {
      const target = event.target as HTMLInputElement;
      const newValue = +target.value > 100 ? 100 : +target.value < 0 ? 0 : +target.value;
      onChange(newValue);
    });
  }

  return controlComponent;
}
