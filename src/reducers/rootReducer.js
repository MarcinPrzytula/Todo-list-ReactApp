import { combineReducers } from 'redux';

import { appReducer } from './appReducer';
import { editPopupReducer } from './editPopupReducer';

export const rootReducer = combineReducers({
  tasks: appReducer,
  editPopup: editPopupReducer,
});
