export class ProgressBlockModel {
  constructor(
    private value: number = 100,
    private isAnimated: boolean = false,
    private isHidden: boolean = false,
  ) {}

  public getValue(): number {
    return this.value;
  }

  public setValue(newValue: number): void {
    this.value = newValue;
  }

  public getIsHidden(): boolean {
    return this.isHidden;
  }

  public setIsHidden(isHidden: boolean): void {
    this.isHidden = isHidden;
  }

  public getIsAnimated(): boolean {
    return this.isAnimated;
  }

  public setIsAnimated(isAnimated: boolean): void {
    this.isAnimated = isAnimated;
  }
}
