
import { B } from '../constants/actionTypes';

export const changeB = (newTest) => {

	return {
		type: B,
		payload: newTest
	};
};