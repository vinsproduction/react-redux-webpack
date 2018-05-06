
import { createStore, combineReducers } from 'redux';

import test from './reducers/test';
import rest from './reducers/rest';

const rootReducer = combineReducers({
	test,
	rest
});

const store = createStore(rootReducer);

console.log('[REDUX STORE]',store.getState());

export default store;