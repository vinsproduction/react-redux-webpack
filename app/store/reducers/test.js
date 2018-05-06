
const initialState = {
	a: 1
};

const test = (state = initialState, action) => {

	const TYPE = action.type || '';
	const PAYLOAD = action.payload || null;
	const log = false;
	let newState;


	if (log) {
		console.log(`[old state] TYPE: ${TYPE} | PAYLOAD:`, PAYLOAD, '| STATE', state);
	}

	switch (TYPE) {
		case 'A':
			newState = { ...state, a: PAYLOAD };
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

export default test;