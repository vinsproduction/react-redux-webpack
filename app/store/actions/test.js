
import { A } from '../constants/actionTypes';


export const changeA = (payload) => {

	// thunk
	return function (dispatch) {

		return dispatch({
			type: A,
			payload: payload
		});

	};
};