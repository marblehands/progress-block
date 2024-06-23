import { ProgressBlockModel } from './progressBlockModel/progressBlockModel';
import { ProgressBlockView } from './progressBlockView/progressBlockView';

export function createProgressBlock() {
  const model = new ProgressBlockModel();
  const view = new ProgressBlockView(model.getValue());

  return {
    element: view.getElement(),
  };
}

const progressBlock = createProgressBlock();
export default progressBlock;
