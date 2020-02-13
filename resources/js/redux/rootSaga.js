import { fork, all } from 'redux-saga/effects';

import menuItemsSaga from './ducks/menu-items/sagas';
import ordersSagas from './ducks/orders/sagas';
import authSagas from './ducks/auth/sagas';

const allSagas = [menuItemsSaga, ...ordersSagas, ...authSagas];

export default function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}
