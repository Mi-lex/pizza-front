import { types } from './actions';
import currencies from './constants';

const INITIAL_STATE = currencies[0];

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.CHANGE_CURRENCY:
			return currencies.find((currency) => currency.name === action.payload);
		default:
			return state;
	}
};

export default reducer;
