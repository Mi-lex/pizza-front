const ADD_ITEM = 'pizza/cart/ADD_ITEM';
const REMOVE_ITEM = 'pizza/cart/REMOVE_ITEM';
const INCREMENT_ITEM = 'pizza/cart/INCREMENT_ITEM';
const DECREMENT_ITEM = 'pizza/cart/DECREMENT_ITEM';

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

export const types = {
	ADD_ITEM,
	REMOVE_ITEM,
	INCREMENT_ITEM,
	DECREMENT_ITEM,
};
