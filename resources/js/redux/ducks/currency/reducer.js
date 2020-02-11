import { types } from './actions';
import currencies from './constants';

const INITIAL_STATE = {
	present: currencies[0],
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.CHANGE_CURRENCY:
			
			return {
				...state,
				present: currencies.find(
					(currency) => currency.name === action.payload,
				),
			};
		default:
			return state;
	}
};

export default reducer;
