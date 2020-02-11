import { combineReducers } from 'redux';
import menuItems from './ducks/menu-items/reducer';
import currency from './ducks/currency/reducer';

const rootReducer = combineReducers({
	menuItems,
	currency,
});

export default rootReducer;
