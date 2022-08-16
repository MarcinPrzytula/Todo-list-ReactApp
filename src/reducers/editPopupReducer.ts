import { ID, EditPopupActionsTypes } from '../actions/editPopupActions';

interface DefaultStateI {
  id: string;
  active: boolean;
}

const editPopupReducer = (
  state: DefaultStateI = {
    id: '',
    active: false,
  },
  action: EditPopupActionsTypes
) => {
  switch (action.type) {
    case ID:
      return {
        id: action.payload.id,
        active: action.payload.active,
      };
    default:
      return state;
  }
};

export default editPopupReducer;
