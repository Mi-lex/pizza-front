import { put, takeEvery, call } from 'redux-saga/effects';
import api, { baseUrl } from '../../../services';
import actions, { types } from './actions';

function* fetchMenuItems() {
	try {
		const items = yield call(api.fetchMenuItems, `${baseUrl}/menu_items`);
		
		yield put(actions.fetchItemsSuccess(items));
	} catch (err) {
		yield put(actions.fetchItemsError(err.message));
	}
}

export function* watchFetchItemsAsync() {
	yield takeEvery(types.FETCH_ITEMS_REQUEST, fetchMenuItems);
}

export default watchFetchItemsAsync;
