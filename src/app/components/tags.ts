import BaseComponent from './baseComponent/baseComponent';

export const div = (classes?: string[], content?: string): BaseComponent<'div'> =>
  new BaseComponent({ tag: 'div', classes, content });

export const h1 = (classes: string[], content: string): BaseComponent<'h1'> =>
  new BaseComponent({ tag: 'h1', classes, content });

export const h2 = (classes: string[], content: string): BaseComponent<'h2'> =>
  new BaseComponent({ tag: 'h2', classes, content });

export const p = (classes: string[], content: string): BaseComponent<'p'> =>
  new BaseComponent({ tag: 'p', classes, content });

export const span = (classes: string[], content: string): BaseComponent<'span'> =>
  new BaseComponent({ tag: 'span', classes, content });

export const a = (classes: string[], content: string, attributes: Record<string, string>): BaseComponent<'a'> =>
  new BaseComponent({ tag: 'a', classes, content, attributes });

export const input = (classes: string[], attributes: Record<string, string>): BaseComponent<'input'> =>
  new BaseComponent({ tag: 'input', classes, attributes });

export const label = (classes: string[], content: string, attributes: Record<string, string>): BaseComponent<'label'> =>
  new BaseComponent({ tag: 'label', classes, content, attributes });

export const button = (
  classes: string[],
  content: string,
  attributes: Record<string, string>,
): BaseComponent<'button'> => new BaseComponent({ tag: 'button', classes, content, attributes });
