
const initialState = {
	a: 1
};

const test = (state, action) => {

	const log = true;
	let newState, defaultAction = false;
	let type = (!state) ? 'INITIAL' : action.type;
	let payload = action.payload || null;
	if (!state) { state = initialState; }

	switch (type) {
		case 'A':
			newState = { ...state, a: payload };
			break;
		default:
			newState = state;
			defaultAction = true;
			break;
	}

	if (log && !defaultAction && type !== 'INITIAL') {
		console.log(`[REDUX] ACTION: ${type}`, { payload: payload, oldState: state, state: newState });
	}
	return newState;
};

export default test;