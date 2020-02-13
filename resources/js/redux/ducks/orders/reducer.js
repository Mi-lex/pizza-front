import { types } from './actions';

const INITIAL_STATE = {
	list: [],
	pending: false,
	errorMessage: null,
	successMessage: null,
	fetchOrdersError: null,
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
		case types.FETCH_ORDERS_REQUEST:
			return {
				...state,
				pending: true,
			};
		case types.FETCH_ORDERS_SUCCESS:
			return {
				...state,
				pending: false,
				list: action.payload,
			};
		case types.FETCH_ORDERS_ERROR:
			return {
				...state,
				pending: false,
				fetchOrdersError: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
