import { ProgressBlockModel } from '../progressBlockModel/progressBlockModel';
import { ProgressBlockView } from '../progressBlockView/progressBlockView';

export class ProgressBlockController {
  constructor(
    private model: ProgressBlockModel,
    private view: ProgressBlockView,
  ) {
    this.view.bindValueInputChange(this.valueInputOnChange.bind(this));
    this.view.bindHideToggleChange(this.hideToggleOnChange.bind(this));
    this.view.bindAnimateToggleChange(this.animateToggleOnChange.bind(this));

    this.updateView();
  }

  private valueInputOnChange(value: string): void {
    const numValue = Number(value);
    if (!Number.isNaN(numValue) && numValue >= 0 && numValue <= 100) {
      this.setValue(numValue);
    }
  }

  private hideToggleOnChange(isChecked: boolean): void {
    this.setIsHidden(isChecked);
  }

  private animateToggleOnChange(isChecked: boolean): void {
    const value = this.model.getValue();
    if (!Number.isNaN(value) && value >= 0 && value <= 100) {
      this.setIsAnimated(isChecked);
    }
  }

  setValue(value: number): void {
    this.model.setValue(value);
    this.updateView();
  }

  setIsAnimated(isAnimated: boolean): void {
    this.model.setIsAnimated(isAnimated);
    this.updateView();
  }

  setIsHidden(isHidden: boolean): void {
    this.model.setIsHidden(isHidden);
    this.updateView();
  }

  private updateView(): void {
    this.view.update(this.model.getValue(), this.model.getIsAnimated(), this.model.getIsHidden());
  }
}
