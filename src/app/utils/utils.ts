import ControlComponent from '@components/progressBlock/controlComponent/controlComponent';
import { input, label } from '@components/tags';

export function createControlComponent(
  option: { label: string; id: string; value?: number },
  type: 'text' | 'checkbox',
) {
  const labelElement = label(['label'], option.label, { for: option.id });
  if (option.value) {
    const inputElement = input(['input'], { type, id: option.id, value: option.value?.toString() });
    return new ControlComponent(inputElement, labelElement);
  }
  const inputElement = input(['input'], { type, id: option.id });

  return new ControlComponent(inputElement, labelElement);
}
