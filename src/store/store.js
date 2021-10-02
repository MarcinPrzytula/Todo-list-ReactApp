import { createStore } from 'redux';

// import { appReducer } from '../reducers/appReducer';
// const store = createStore(appReducer);

import { rootReducer } from '../reducers/rootReducer';
const store = createStore(rootReducer);

export default store;
