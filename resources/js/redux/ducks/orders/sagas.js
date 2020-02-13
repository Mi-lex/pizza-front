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
		yield put(actions.makeOrderSuccess(response));
	} catch (err) {
		yield put(actions.makeOrderError(err.response.data.message));
	}
}

function* fetchOrdersRequest(action) {
	try {
		const items = yield call(
			api.fetchUserOrders,
			`${baseUrl}/users/${action.payload}/orders`,
		);
		yield put(actions.fetchOrdersSuccess(items));
	} catch (err) {
		console.log(err.response.data.message);

		yield put(actions.makeOrderError(err.response.data.message));
	}
}

export function* watchMakeOrderAsync() {
	yield takeEvery(types.MAKE_ORDER_REQUEST, makeOrderRequest);
}

export function* watchFetchOrdersRequest() {
	yield takeEvery(types.FETCH_ORDERS_REQUEST, fetchOrdersRequest);
}

export default [watchMakeOrderAsync, watchFetchOrdersRequest];
