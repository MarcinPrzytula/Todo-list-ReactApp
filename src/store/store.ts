import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
// import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
const Store = createStore(rootReducer, applyMiddleware(thunk));
// const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type RootStore = ReturnType<typeof rootReducer>;

export default Store;
