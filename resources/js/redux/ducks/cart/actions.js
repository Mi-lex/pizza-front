const ADD_ITEM = 'pizza/cart/ADD_ITEM';
const REMOVE_ITEM = 'pizza/cart/REMOVE_ITEM';
const INCREMENT_ITEM = 'pizza/cart/INCREMENT_ITEM';
const DECREMENT_ITEM = 'pizza/cart/DECREMENT_ITEM';
const CLEAR_CART = 'pizza/cart/CLEAR';

export const addItem = (item) => ({
	type: ADD_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: REMOVE_ITEM,
	payload: item,
});

export const incrementItem = (item) => ({
	type: INCREMENT_ITEM,
	payload: item,
});

export const decrementItem = (item) => ({
	type: DECREMENT_ITEM,
	payload: item,
});

export const clearCart = () => ({
	type: CLEAR_CART,
});

export const types = {
	ADD_ITEM,
	REMOVE_ITEM,
	INCREMENT_ITEM,
	DECREMENT_ITEM,
	CLEAR_CART,
};
