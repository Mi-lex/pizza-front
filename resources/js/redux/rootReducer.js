import { combineReducers } from 'redux';
import menuItems from './ducks/menu-items/reducer';

const rootReducer = combineReducers({
	menuItems,
});

export default rootReducer;
