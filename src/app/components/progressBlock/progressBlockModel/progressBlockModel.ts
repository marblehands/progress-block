export class ProgressBlockModel {
  constructor(
    private value: number = 100,
    private isAnimated: boolean = false,
    private isHidden: boolean = false,
  ) {}

  getValue(): number {
    return this.value;
  }

  setValue(newValue: number): void {
    this.value = newValue;
  }

  getIsHidden(): boolean {
    return this.isHidden;
  }

  setIsHidden(isHidden: boolean): void {
    this.isHidden = isHidden;
  }

  getIsAnimated(): boolean {
    return this.isAnimated;
  }

  setIsAnimated(isAnimated: boolean): void {
    this.isAnimated = isAnimated;
  }
}
