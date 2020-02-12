import { fork, all } from 'redux-saga/effects';

import menuItemsSaga from './ducks/menu-items/sagas';
import ordersSaga from './ducks/orders/sagas';

const allSagas = [menuItemsSaga, ordersSaga];

export default function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}
