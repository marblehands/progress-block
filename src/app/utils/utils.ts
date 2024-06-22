import ControlComponent from '@components/progressBlock/controlComponent/controlComponent';
import { input, label } from '@components/tags';

export function createControlComponent(option: { label: string; id: string }, type: 'text' | 'checkbox') {
  const inputElement = input(['input'], { type, id: option.id });
  const labelElement = label(['label'], option.label, { for: option.id });
  return new ControlComponent(inputElement, labelElement);
}
