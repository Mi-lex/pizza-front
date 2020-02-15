const SIGN_UP_REQUEST = 'pizza/auth/SIGN_UP';
const SIGN_UP_SUCCESS = 'pizza/auth/SIGN_UP_SUCCESS';
const SIGN_UP_ERROR = 'pizza/auth/SIGN_UP_ERROR';
const LOG_IN_REQUEST = 'pizza/auth/LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'pizza/auth/LOG_IN_SUCCESS';
const LOG_IN_ERROR = 'pizza/auth/LOG_IN_ERROR';

export const signUpRequest = (user) => ({
	type: SIGN_UP_REQUEST,
	payload: user,
});

export const signUpSuccess = (success) => ({
	type: SIGN_UP_SUCCESS,
	payload: success,
});

export const signUpError = (error) => ({
	type: SIGN_UP_ERROR,
	payload: error,
});

export const logInRequest = (user) => ({
	type: LOG_IN_REQUEST,
	payload: user,
});

export const logInSuccess = (message) => ({
	type: LOG_IN_SUCCESS,
	payload: message,
});

export const logInError = (error) => ({
	type: LOG_IN_ERROR,
	payload: error,
});

export default {
	signUpRequest,
	signUpSuccess,
	signUpError,
	logInRequest,
	logInSuccess,
	logInError,
};

export const types = {
	SIGN_UP_REQUEST,
	SIGN_UP_SUCCESS,
	SIGN_UP_ERROR,
	LOG_IN_REQUEST,
	LOG_IN_SUCCESS,
	LOG_IN_ERROR,
};
