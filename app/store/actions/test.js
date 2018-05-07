
import { A } from '../constants/actionTypes';


export const changeA = (payload) => {
	
	return {
		type: A,
		payload: payload
	};
};