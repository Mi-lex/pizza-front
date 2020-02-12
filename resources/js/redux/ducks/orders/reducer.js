import { types } from './actions';

const INITIAL_STATE = {
	list: [],
	pending: false,
	errorMessage: null,
	successMessage: null,
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.MAKE_ORDER_REQUEST:
			return {
				...state,
				pending: true,
				successMessage: null,
			};
		case types.MAKE_ORDER_SUCCESS:
			return {
				...state,
				pending: false,
				successMessage: action.payload,
			};
		case types.MAKE_ORDER_ERROR:
			return {
				...state,
				pending: false,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
