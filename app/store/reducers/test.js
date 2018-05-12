
const initialState = {
	a: 1
};

const test = (state = initialState, action) => {

	let newState, defaultAction = false;
	const type =  action.type;
	const payload = action.payload;

	switch (type) {
		case 'A':
			newState = { ...state, a: payload };
			break;
		default:
			newState = state;
			defaultAction = true;
			break;
	}

	if (!defaultAction) {
		console.log(`[REDUX] ACTION: ${type}`, { payload: payload, oldState: state, state: newState });
	}
	return newState;
};

export default test;