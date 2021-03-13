import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducersPack = combineReducers({});

const store = createStore(reducersPack, composeWithDevTools);
export default store;
