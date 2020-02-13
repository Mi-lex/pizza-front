import { types } from './actions';
import { localStorageSync } from '../../../utils';

const findInTheCart = (item, cartItems) => {
	const foundItem = cartItems.find((cartItem) => cartItem.id === item.id);

	return {
		foundItem,
		updatedCartItems: [...cartItems],
	};
};

const removeFromCart = (item, cartItems) => {
	const filteredItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
	return [...filteredItems];
};

const storedState = localStorage.getItem('menuItems');
const INITIAL_STATE = storedState ? JSON.parse(storedState) : [];

const reducer = (state = INITIAL_STATE, action) => {
	const { type } = action;
	let updatedState = state;

	if (type === types.ADD_ITEM) {
		const item = action.payload;
		const { foundItem, updatedCartItems } = findInTheCart(item, state);

		if (foundItem) {
			foundItem.quantity++;
		} else {
			const { id, name, type, price } = item;

			updatedCartItems.push({
				id,
				name,
				type,
				price,
				quantity: 1,
			});
		}
		updatedState = updatedCartItems;
	} else if (type === types.REMOVE_ITEM) {
		updatedState = removeFromCart(action.payload, state);
	} else if (type === types.INCREMENT_ITEM) {
		const { foundItem, updatedCartItems } = findInTheCart(
			action.payload,
			state,
		);
		foundItem.quantity++;
		updatedState = updatedCartItems;
	} else if (type === types.DECREMENT_ITEM) {
		const { foundItem, updatedCartItems } = findInTheCart(
			action.payload,
			state,
		);

		if (foundItem.quantity === 1) {
			updatedState = removeFromCart(foundItem, updatedCartItems);
		} else {
			foundItem.quantity--;

			updatedState = updatedCartItems;
		}
	} else if (type === types.CLEAR_CART) {
		updatedState = [];
	}

	return localStorageSync(updatedState, 'menuItems');
};

export default reducer;
