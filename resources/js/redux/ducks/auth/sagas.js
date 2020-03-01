import { put, takeEvery, call } from 'redux-saga/effects'
import api from '../../../services'
import actions, { types } from './actions'

function* loginUnser(action) {
	try {
		const phone = yield call(api.authUser, `auth/login`, action.payload)
		yield put(actions.logInSuccess(phone))
	} catch (err) {
		yield put(actions.logInError(api.getMessageFromError(err)))
	}
}

function* signUpUser(action) {
	try {
		yield call(api.authUser, `auth/signup`, action.payload)
		yield put(actions.signUpSuccess(true))
	} catch (err) {
		yield put(actions.signUpError(api.getMessageFromError(err)))
	}
}

export function* watchLoginUser() {
	yield takeEvery(types.LOG_IN_REQUEST, loginUnser)
}

export function* watchSignupUser() {
	yield takeEvery(types.SIGN_UP_REQUEST, signUpUser)
}

export default [watchLoginUser, watchSignupUser]
