import { ProgressBlockController } from './progressBlockController/progressBlockController';
import { ProgressBlockModel } from './progressBlockModel/progressBlockModel';
import { ProgressBlockView } from './progressBlockView/progressBlockView';

interface ProgressBlockComponentWithApi {
  element: HTMLElement;
  setValue: (value: number) => void;
  setIsAnimated: (isAnimated: boolean) => void;
  setIsHidden: (isHidden: boolean) => void;
}

export function createProgressBlock(): ProgressBlockComponentWithApi {
  const model = new ProgressBlockModel();
  const view = new ProgressBlockView(model.getValue());
  const controller = new ProgressBlockController(model, view);

  return {
    element: view.getElement(),
    setValue: (value: number): void => {
      controller.setValue(value);
    },
    setIsAnimated: (isAnimated: boolean): void => {
      controller.setIsAnimated(isAnimated);
    },
    setIsHidden: (isHidden: boolean): void => {
      controller.setIsHidden(isHidden);
    },
  };
}

const progressBlock = createProgressBlock();
export default progressBlock;
