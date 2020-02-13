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
		yield put(actions.logInError(err.response.data.message));
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
		yield put(actions.signUpError(err.response.data.message));
	}
}

export function* watchLoginUser() {
	yield takeEvery(types.LOG_IN_REQUEST, loginUnser);
}

export function* watchSignupUser() {
	yield takeEvery(types.SIGN_UP_REQUEST, signUpUser);
}

export default [watchLoginUser, watchSignupUser];
