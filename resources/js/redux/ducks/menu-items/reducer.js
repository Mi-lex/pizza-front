import { types } from './actions';

const INITIAL_STATE = {
	list: [],
	pending: false,
	error: null,
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.FETCH_ITEMS_REQUEST:
			return {
				...state,
				pending: true,
			};
		case types.FETCH_ITEMS_SUCCESS:
			return {
				...state,
				pending: false,
				list: action.payload,
			};
		case types.FETCH_ITEMS_ERROR:
			return {
				...state,
				pending: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
