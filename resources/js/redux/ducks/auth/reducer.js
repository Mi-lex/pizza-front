import { combineReducers } from 'redux';
import { types } from './actions';
import { localStorageSync } from '../../../utils';

const INITIAL_SIGN_UP_STATE = {
	pending: false,
	success: false,
	error: null,
};

const signUp = (state = INITIAL_SIGN_UP_STATE, action) => {
	switch (action.type) {
		case types.SIGN_UP_REQUEST:
			return {
				...state,
				pending: true,
				error: null,
				success: false,
			};
		case types.SIGN_UP_SUCCESS:
			return {
				...state,
				success: action.payload,
				pending: false,
			};
		case types.SIGN_UP_ERROR:
			return {
				...state,
				error: action.payload,
				pending: false,
			};
		default:
			return state;
	}
};

const storedState = localStorage.getItem('login');

const LOG_IN_INITIAL_STATE = storedState
	? JSON.parse(storedState)
	: {
			user: {},
			success: false,
			pending: false,
			error: null,
	  };

const logIn = (state = LOG_IN_INITIAL_STATE, action) => {
	switch (action.type) {
		case types.LOG_IN_REQUEST:
			return {
				...state,
				pending: true,
				error: null,
			};
		case types.LOG_IN_SUCCESS:
			return localStorageSync(
				{
					...state,
					user: {
						...state.user,
						phone: action.payload,
					},
					pending: false,
					success: true,
				},
				'auth',
			);
		case types.LOG_IN_ERROR:
			return {
				...state,
				error: action.payload,
				pending: false,
			};
		default:
			return state;
	}
};

const auth = combineReducers({
	signUp,
	logIn,
});

export default auth;
