import progressBlock from './components/progressBlock/progressBlock';

class App {
  constructor(private progressBlockComponent: HTMLElement) {}

  public createApp(rootElement: HTMLElement): void {
    rootElement.append(this.progressBlockComponent);
  }
}

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) {
  throw new Error('Root element not found');
}

const app = new App(progressBlock.element);
app.createApp(root);
