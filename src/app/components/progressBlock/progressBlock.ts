import styles from './_progressBlock.module.scss';

import BaseComponent from '../baseComponent/baseComponent';
import { ProgressBlockHeader } from './progressBlockHeader/header';
import { ProgressBlockBody } from './progressBlockBody/progressBlockBody';

class ProgressBlockComponent extends BaseComponent<'div'> {
  constructor(
    private header: BaseComponent<'header'>,
    private body: BaseComponent<'main'>,
  ) {
    super({ tag: 'div', classes: [styles.progressBlock] });
    this.render();
  }

  private render(): void {
    this.append([this.header.getElement(), this.body.getElement()]);
  }
}

export const ProgressBlock = (): ProgressBlockComponent =>
  new ProgressBlockComponent(ProgressBlockHeader(), ProgressBlockBody());
