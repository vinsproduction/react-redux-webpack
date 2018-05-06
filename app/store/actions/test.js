
import { A } from '../constants/actionTypes';


export const changeA = (newTest) => {
	return {
		type: A,
		payload: newTest
	};
};