import { types } from './actions';
import { localStorageSync } from '../../../utils';

const storedState = localStorage.getItem('auth');

const INITIAL_STATE = storedState
	? JSON.parse(storedState)
	: {
			user: {},
			signUpSuccess: false,
			loggedIn: false,
			pending: false,
			signUpError: null,
			logInError: null,
	  };

const auth = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SIGN_UP_REQUEST:
			return {
				...state,
				pending: true,
				signUpError: null,
				signUpSuccess: false,
			};
		case types.SIGN_UP_SUCCESS:
			return {
				...state,
				signUpSuccess: true,
				pending: false,
			};
		case types.LOG_IN_REQUEST:
			return {
				...state,
				pending: true,
				logInError: null,
				signUpSuccess: false,
			};
		case types.LOG_IN_SUCCESS:
			return localStorageSync(
				{
					...state,
					signUpSuccess: false,
					pending: false,
					loggedIn: true,
				},
				'auth',
			);
		case types.SIGN_UP_ERROR:
			return {
				...state,
				signUpError: action.payload,
				pending: false,
			};
		case types.LOG_IN_ERROR:
			return {
				...state,
				logInError: action.payload,
				pending: false,
			};
		default:
			return state;
	}
};

export default auth;
