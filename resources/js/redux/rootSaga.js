import { fork, all } from 'redux-saga/effects';

import menuItemsSaga from './ducks/menu-items/sagas';

const allSagas = [menuItemsSaga];

export default function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}
