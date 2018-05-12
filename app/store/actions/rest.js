
import { B } from '../constants/actionTypes';

export const changeB = (payload) => {

	// thunk
	return function (dispatch) {
		return dispatch({
			type: B,
			payload: payload
		});
	};
};