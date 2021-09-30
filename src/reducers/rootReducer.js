import { combineReducers } from 'redux';

import { appReducer } from './appReducer';
import { testReducer } from './testReducer';

export const rootReducer = combineReducers({
  tasks: appReducer,
  test: testReducer,
});
