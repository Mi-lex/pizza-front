import { put, takeEvery, call } from 'redux-saga/effects';
import api, { baseUrl } from '../../../services';
import actions, { types } from './actions';

function* makeOrderRequest(action) {
	try {
		const response = yield call(
			api.storeOrder,
			`${baseUrl}/orders`,
			action.payload,
		);
		console.log(response);

		yield put(actions.makeOrderSuccess(response.data.message));
	} catch (err) {
		yield put(actions.makeOrderError(err.message));
	}
}

export function* watchMakeOrderAsync() {
	yield takeEvery(types.MAKE_ORDER_REQUEST, makeOrderRequest);
}

export default watchMakeOrderAsync;
