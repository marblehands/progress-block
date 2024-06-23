import styles from './_progressBlockView.module.scss';
import BaseComponent from '@components/baseComponent/baseComponent';
import { div, h1, input, label } from '@components/tags';
import { ProgressCircle } from '../progressCircle/progressCircle';
import { AnimationService } from '../services/animationService';
import Canvas from '../canvasComponent/canvasComponent';

export class ProgressBlockView extends BaseComponent<'section'> {
  private valueInput: BaseComponent<'input'>;
  private animateToggle: BaseComponent<'input'>;
  private hideToggle: BaseComponent<'input'>;
  private progressCircle!: ProgressCircle;
  private animation!: AnimationService;
  constructor(value: number) {
    super({ tag: 'section', classes: [styles.progressBlock] });
    this.valueInput = input([styles.input, styles.inputText], { type: 'text', id: 'value', value: `${value}` });
    this.animateToggle = input([styles.input, styles.inputToggle], { type: 'checkbox', id: 'animate' });
    this.hideToggle = input([styles.input, styles.inputToggle], { type: 'checkbox', id: 'hide' });
    this.renderCircle(value);
    this.renderComponent();
  }

  private renderComponent(): void {
    const header = this.renderHeader('Progress');
    const circleWrapper = div([styles.wrapper]);
    const canvasWrapper = div([styles.canvasWrapper]);
    canvasWrapper.append([Canvas.getElement()]);
    circleWrapper.append([header.getElement(), canvasWrapper.getElement()]);

    const controlsWrapper = div([styles.wrapper]);
    const valueInputGroup = this.renderInputGroup(this.valueInput, 'Value', 'value');
    const animateToggleGroup = this.renderInputGroup(this.animateToggle, 'Animate', 'animate');
    const hideToggleGroup = this.renderInputGroup(this.hideToggle, 'Hide', 'hide');
    controlsWrapper.append([
      valueInputGroup.getElement(),
      animateToggleGroup.getElement(),
      hideToggleGroup.getElement(),
    ]);

    this.append([circleWrapper.getElement(), controlsWrapper.getElement()]);
  }

  private renderHeader(headerText: string): BaseComponent<'header'> {
    const header = new BaseComponent<'header'>({ tag: 'header', classes: [styles.header] });
    const headline = h1([styles.title], headerText);
    header.append([headline.getElement()]);
    return header;
  }

  private renderCircle(value: number) {
    const angleRadians = (value / 100) * 2 * Math.PI - Math.PI / 2;
    this.progressCircle = new ProgressCircle(Canvas.getContext(), 65, 65, 55, angleRadians);
    this.animation = new AnimationService(this.progressCircle, 0.01);
  }

  private renderInputGroup(input: BaseComponent<'input'>, labelContent: string, id: string): BaseComponent<'div'> {
    const wrapper = div([styles.inputGroup]);
    const inputLabel = label([styles.inputLabel], labelContent, { for: id });
    wrapper.append([inputLabel.getElement(), input.getElement()]);
    return wrapper;
  }

  private updateCircle(value: number): void {
    const angleRadians = (value / 100) * 2 * Math.PI;
    this.progressCircle.updateArcWIdth(angleRadians);
  }

  private updateHideToggle(isHidden: boolean): void {
    this.hideToggle.setAttributes({ checked: `${isHidden}` });
  }

  private updateAnimateToggle(isAnimated: boolean): void {
    this.animateToggle.setAttributes({ checked: `${isAnimated}` });
  }

  update(value: number, isAnimated: boolean, isHidden: boolean): void {
    this.updateCircle(value);
    this.updateHideToggle(isHidden);
    this.updateAnimateToggle(isAnimated);
  }

  bindValueInputChange(onChange: (value: string) => void): void {
    this.valueInput.addListener('input', (e) => {
      if (e.target && e.target instanceof HTMLInputElement) {
        onChange(e.target.value);
      }
    });
  }
}
