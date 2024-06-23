import BaseComponent from '../../baseComponent/baseComponent';
import { div, h1, input, label } from '../../tags';
import styles from './_progressBlockView.module.scss';
import { ProgressCircle } from './progressCircle/progressCircle';
import { AnimationService } from '../services/animationService';
import Canvas from './canvasComponent/canvasComponent';

export class ProgressBlockView extends BaseComponent<'section'> {
  private valueInput: BaseComponent<'input'>;

  private animateToggle: BaseComponent<'input'>;

  private hideToggle: BaseComponent<'input'>;

  private progressCircle!: ProgressCircle;

  private animation!: AnimationService;

  constructor(value: number) {
    super({ tag: 'section', classes: [styles.progressBlock] });
    this.valueInput = input([styles.input, styles.inputText], { type: 'text', id: 'value', value: `${value}` });
    this.animateToggle = input([styles.input, styles.inputToggle, 'input-toggle-hide'], {
      type: 'checkbox',
      id: 'animate',
    });
    this.hideToggle = input([styles.input, styles.inputToggle], { type: 'checkbox', id: 'hide' });
    this.renderCircle(value);
    this.renderComponent();
  }

  private renderComponent(): void {
    const header = new BaseComponent<'header'>({ tag: 'header', classes: [styles.header] });
    const headline = h1([styles.title], 'Progress');
    header.append([headline.getElement()]);

    const circleWrapper = div([styles.wrapper]);
    const canvasWrapper = div([styles.canvasWrapper]);
    canvasWrapper.append([Canvas.getElement()]);
    circleWrapper.append([header.getElement(), canvasWrapper.getElement()]);

    const controlsWrapper = div([styles.wrapper]);
    const valueInputGroup = ProgressBlockView.renderInputGroup(this.valueInput, 'Value', 'value');
    const animateToggleGroup = ProgressBlockView.renderInputGroup(this.animateToggle, 'Animate', 'animate');
    const hideToggleGroup = ProgressBlockView.renderInputGroup(this.hideToggle, 'Hide', 'hide');
    controlsWrapper.append([
      valueInputGroup.getElement(),
      animateToggleGroup.getElement(),
      hideToggleGroup.getElement(),
    ]);

    this.append([circleWrapper.getElement(), controlsWrapper.getElement()]);
  }

  private renderCircle(value: number): void {
    const angleRadians = (value / 100) * 2 * Math.PI - Math.PI / 2;
    this.progressCircle = new ProgressCircle(Canvas.getContext(), 65, 65, 55, angleRadians);
    this.animation = new AnimationService(this.progressCircle, 0.01);
  }

  private static renderInputGroup(
    inputElement: BaseComponent<'input'>,
    labelContent: string,
    id: string,
  ): BaseComponent<'div'> {
    const wrapper = div([styles.inputGroup]);
    const inputLabel = label([styles.inputLabel], labelContent, { for: id });
    wrapper.append([inputLabel.getElement(), inputElement.getElement()]);

    return wrapper;
  }

  private updateCircle(value: number): void {
    const angleRadians = (value / 100) * 2 * Math.PI;
    this.progressCircle.updateArcWidth(angleRadians);
  }

  private updateHideToggle(isHidden: boolean): void {
    if (isHidden) {
      this.hideToggle.setAttributes({ checked: 'true' });
    } else {
      this.hideToggle.removeAttribute('checked');
    }
  }

  private updateAnimateToggle(isAnimated: boolean): void {
    if (isAnimated) {
      this.animateToggle.setAttributes({ checked: 'true' });
    } else {
      this.animateToggle.removeAttribute('checked');
    }
  }

  private updateVisibility(isHidden: boolean): void {
    if (isHidden) {
      this.addStyles([styles.hide]);
    } else {
      this.removeStyles([styles.hide]);
    }
  }

  private updateAnimationState(isAnimated: boolean): void {
    if (isAnimated) {
      this.animation.start();
    } else {
      this.animation.stop();
    }
  }

  public update(value: number, isAnimated: boolean, isHidden: boolean): void {
    this.updateVisibility(isHidden);
    this.updateHideToggle(isHidden);
    this.updateCircle(value);
    this.updateAnimateToggle(isAnimated);
    this.updateAnimationState(isAnimated);
  }

  public bindValueInputChange(onChange: (value: string) => void): void {
    this.valueInput.addListener('input', (e) => {
      if (e.target && e.target instanceof HTMLInputElement) {
        onChange(e.target.value);
      }
    });
  }

  public bindHideToggleChange(onChange: (isChecked: boolean) => void): void {
    this.hideToggle.addListener('change', (e) => {
      if (e.target && e.target instanceof HTMLInputElement) {
        onChange(e.target.checked);
      }
    });
  }

  public bindAnimateToggleChange(onChange: (isChecked: boolean) => void): void {
    this.animateToggle.addListener('change', (e) => {
      if (e.target && e.target instanceof HTMLInputElement) {
        onChange(e.target.checked);
      }
    });
  }
}
