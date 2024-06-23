import { ProgressBlockController } from './progressBlockController/progressBlockController';
import { ProgressBlockModel } from './progressBlockModel/progressBlockModel';
import { ProgressBlockView } from './progressBlockView/progressBlockView';

export function createProgressBlock() {
  const model = new ProgressBlockModel();
  const view = new ProgressBlockView(model.getValue());
  const controller = new ProgressBlockController(model, view);

  return {
    element: view.getElement(),
    setValue: (value: number) => controller.setValue(value),
    setIsAnimated: (isAnimated: boolean) => controller.setIsAnimated(isAnimated),
    setIsHidden: (isHidden: boolean) => controller.setIsHidden(isHidden),
  };
}

const progressBlock = createProgressBlock();
export default progressBlock;
