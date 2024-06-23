import { ProgressBlockModel } from '../progressBlockModel/progressBlockModel';
import { ProgressBlockView } from '../progressBlockView/progressBlockView';

export class ProgressBlockController {
  constructor(
    private model: ProgressBlockModel,
    private view: ProgressBlockView,
  ) {
    this.view.bindValueInputChange(this.valueInputOnChange.bind(this));

    this.updateView();
  }

  private valueInputOnChange(value: string): void {
    const numValue = Number(value);
    if (!Number.isNaN(numValue) && numValue >= 0 && numValue <= 100) {
      this.setValue(numValue);
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
