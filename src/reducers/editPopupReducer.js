import { ID } from '../actions/editPopupActions.js';

export const editPopupReducer = (
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
        `We have no action of the type${action.type}`
      );

      return state;
  }
};
