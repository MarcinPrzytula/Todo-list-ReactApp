import { ID } from '../actions/testActions.js';

export const testReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case ID:
      return {
        id: action.payload.id,
        isVisible: action.payload.value,
      };
    default:
      console.warn(
        `Nie mamy akcji typu ${action.type}`
      );

      return state;
  }
};
