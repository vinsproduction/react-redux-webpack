import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import test from './reducers/test';
import rest from './reducers/rest';
import router from './reducers/router';

const rootReducer = combineReducers({
	test,
	rest,
	router,
	routerRedux: routerReducer
});

export const history = createHistory();

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // Chrome Redux dev-tool
	applyMiddleware(thunk, routerMiddleware(history)),
);

console.log('[REDUX STORE]',store.getState());