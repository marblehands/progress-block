import BaseComponent from '../baseComponent/baseComponent';
import { ProgressBlockHeader } from './progressBlockHeader/header';
import styles from './_progressBlock.module.scss';

class ProgressBlockComponent extends BaseComponent<'div'> {
  constructor(private header: BaseComponent<'header'>) {
    super({ tag: 'div', classes: [styles.progressBlock] });
    this.render();
  }

  private render(): void {
    this.append([this.header.getElement()]);
  }
}

export const ProgressBlock = (): ProgressBlockComponent => new ProgressBlockComponent(ProgressBlockHeader());
