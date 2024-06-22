import BaseComponent from '../../baseComponent/baseComponent';
import styles from './_header.module.scss';

const HEADLINE_CONTENT = 'Progress';

class ProgressBlockHeaderComponent extends BaseComponent<'header'> {
  constructor(private title: string) {
    super({ tag: 'header', classes: [styles.header] });
    this.render();
  }

  private render(): void {
    const h1 = new BaseComponent<'h1'>({ tag: 'h1', classes: [styles.title], content: this.title });
    this.append([h1.getElement()]);
  }
}

export const ProgressBlockHeader = (): ProgressBlockHeaderComponent =>
  new ProgressBlockHeaderComponent(HEADLINE_CONTENT);
