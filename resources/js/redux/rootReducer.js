import { combineReducers } from 'redux';
import menuItems from './ducks/menu-items/reducer';
import currency from './ducks/currency/reducer';
import cartItems from './ducks/cart/reducer';
import orders from './ducks/orders/reducer';

const rootReducer = combineReducers({
	menuItems,
	currency,
	cartItems,
	orders,
});

export default rootReducer;
