
import { B } from '../constants/actionTypes';

export const changeB = (payload) => {

	return {
		type: B,
		payload: payload
	};
};