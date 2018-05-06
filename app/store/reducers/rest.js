

const initialState = {
	b: 1
};

const rest = (state = initialState, action) => {
	
	const TYPE = action.type || '';
	const PAYLOAD = action.payload || null;
	
	const log = false;
	let newState;

	if (log){
		console.log(`[old state] TYPE: ${TYPE} | PAYLOAD:`, PAYLOAD, '| STATE', state);
	}

	switch (TYPE) {
		case 'B':
			newState = { ...state, b: PAYLOAD };
			break;
		default:
			newState = state;
			break;
	}

	if (log) {
		console.log(`[new state] TYPE: ${TYPE} | PAYLOAD:`, PAYLOAD, '| STATE', newState);
	}

	return newState;
};

export default rest;