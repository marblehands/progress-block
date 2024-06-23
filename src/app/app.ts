// import { ProgressBlock } from './components/progressBlock/progressBlock';
// import type BaseComponent from './components/baseComponent/baseComponent';
import progressBlock from '@components/progressBlock/createProgressBlock';

class App {
  constructor(private progressBlock: HTMLElement) {}

  public createApp(rootElement: HTMLElement): void {
    rootElement.append(this.progressBlock);
  }
}

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) {
  throw new Error('Root element not found');
}

// const app = new App(ProgressBlock());
const app = new App(progressBlock.element);
app.createApp(root);
