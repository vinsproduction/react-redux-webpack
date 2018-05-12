
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
	route: {}
};

const router = (state = initialState, action) => {

	const type = action.type;
	const payload = action.payload;

	if (type !== LOCATION_CHANGE) { return state; }

	const newState = {...state};

	console.log(`[REDUX] ACTION: ${type}`, { payload: payload, oldState: state, state: newState });

	return newState;
};

export default router;