import { put, takeEvery, call } from 'redux-saga/effects';
import api, { baseUrl } from '../../../services';
import actions, { types } from './actions';

function* loginUnser(action) {
	try {
		const phone = yield call(
			api.authUser,
			`${baseUrl}/auth/login`,
			action.payload,
		);
		yield put(actions.logInSuccess(phone));
	} catch (err) {
		const message = err.response ? err.response.data.message : err.message;
		yield put(actions.logInError(message));
	}
}

function* signUpUser(action) {
	try {
		const phone = yield call(
			api.authUser,
			`${baseUrl}/auth/signup`,
			action.payload,
		);
		yield put(actions.signUpSuccess());
	} catch (err) {
		
		const message = err.response ? err.response.data.message : err.message;
		yield put(actions.signUpError(message));
	}
}

export function* watchLoginUser() {
	yield takeEvery(types.LOG_IN_REQUEST, loginUnser);
}

export function* watchSignupUser() {
	yield takeEvery(types.SIGN_UP_REQUEST, signUpUser);
}

export default [watchLoginUser, watchSignupUser];
