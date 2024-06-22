import { ProgressBlock } from './components/progressBlock/progressBlock';

import type BaseComponent from './components/baseComponent/baseComponent';

class App {
  constructor(private progressBlock: BaseComponent<'div'>) {}

  public createApp(rootElement: HTMLElement): void {
    rootElement.append(this.progressBlock.getElement());
  }
}

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) {
  throw new Error('Root element not found');
}

const app = new App(ProgressBlock());
app.createApp(root);
