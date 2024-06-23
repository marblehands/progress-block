import BaseComponent from '@components/baseComponent/baseComponent';
import { div, input, label } from '@components/tags';
import { ProgressBlockModel } from '../progressBlockModel/progressBlockModel';
import { ProgressCircle } from '../progressCircle/progressCircle';
import { AnimationService } from '../services/animationService';
import Canvas from '../canvasComponent/canvasComponent';

const PROGRESS_BLOCK_OPTIONS = {
  header: {
    h1: 'Progress',
  },
  valueInput: {
    label: 'Value',
    attributes: {
      type: 'text',
      id: 'value',
    },
  },
  animateToggle: {
    label: 'Animate',
    attributes: {
      id: 'animate',
    },
  },
  hideToggle: {
    label: 'Hide',
    attributes: {
      id: 'hide',
    },
  },
};

export class ProgressBlockView extends BaseComponent<'section'> {
  private valueInput: BaseComponent<'input'>;
  private animateToggle: BaseComponent<'input'>;
  private hideToggle: BaseComponent<'input'>;
  private progressCircle!: ProgressCircle;
  private animation!: AnimationService;
  constructor(value: number) {
    super({ tag: 'section' });
    this.valueInput = input(['input'], { type: 'text', id: 'value', value: `${value}` });
    this.animateToggle = input(['input'], { type: 'checkbox', id: 'animate' });
    this.hideToggle = input(['input'], { type: 'checkbox', id: 'hide' });
    this.renderCircle(value);
    this.renderComponent();
  }

  renderComponent(): void {
    const valueInputGroup = this.renderInputGroup(this.valueInput, 'Value', 'value');
    const animateToggleGroup = this.renderInputGroup(this.animateToggle, 'Animate', 'animate');
    const hideToggleGroup = this.renderInputGroup(this.hideToggle, 'Hide', 'hide');
    this.append([
      Canvas.getElement(),
      valueInputGroup.getElement(),
      animateToggleGroup.getElement(),
      hideToggleGroup.getElement(),
    ]);
  }

  renderCircle(value: number) {
    const angleRadians = (value / 100) * 2 * Math.PI - Math.PI / 2;
    this.progressCircle = new ProgressCircle(Canvas.getContext(), 60, 60, 50, angleRadians);
    this.animation = new AnimationService(this.progressCircle, 0.01);
  }

  renderInputGroup(input: BaseComponent<'input'>, labelContent: string, id: string): BaseComponent<'div'> {
    const wrapper = div(['input-group']);
    const inputLabel = label(['input-label'], labelContent, { id });
    wrapper.append([inputLabel.getElement(), input.getElement()]);
    return wrapper;
  }

  update({ value, isAnimated, isHidden }: ProgressBlockModel): void {}
}
