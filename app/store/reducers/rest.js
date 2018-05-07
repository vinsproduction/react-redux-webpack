

const initialState = {
	b: 1
};

const rest = (state, action) => {
	
	const log = true;
	let newState;
	let type = (!state) ? 'INITIAL' : action.type;
	let payload = action.payload || null;
	if (!state) { state = initialState; }


	switch (type) {
		case 'B':
			newState = { ...state, b: payload };
			break;
		default:
			newState = state;
			break;
	}

	if(log && type !== 'INITIAL') {
		console.log(`[REDUX] ACTION: ${type}`, { payload: payload, oldState: state, state: newState });
	}
	return newState;
};

export default rest;