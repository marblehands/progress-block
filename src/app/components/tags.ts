import BaseComponent from './baseComponent/baseComponent';

export const div = (classes?: string[], content?: string): BaseComponent<'div'> =>
  new BaseComponent({ tag: 'div', classes, content });

export const h1 = (classes: string[], content: string): BaseComponent<'h1'> =>
  new BaseComponent({ tag: 'h1', classes, content });

export const input = (classes: string[], attributes: Record<string, string>): BaseComponent<'input'> =>
  new BaseComponent({ tag: 'input', classes, attributes });

export const label = (classes: string[], content: string, attributes: Record<string, string>): BaseComponent<'label'> =>
  new BaseComponent({ tag: 'label', classes, content, attributes });
