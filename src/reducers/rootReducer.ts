import { combineReducers } from 'redux';

import appReducer from './appReducer';
import editPopupReducer from './editPopupReducer';

const rootReducer = combineReducers({
  tasks: appReducer,
  editPopup: editPopupReducer,
});

export default rootReducer;
