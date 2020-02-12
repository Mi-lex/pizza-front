const MAKE_ORDER_REQUEST = 'pizza/orders/MAKE_ORDER';
const MAKE_ORDER_PENDING = 'pizza/orders/MAKE_ORDER_PENDING';
const MAKE_ORDER_SUCCESS = 'pizza/orders/MAKE_ORDER_SUCCESS';
const MAKE_ORDER_ERROR = 'pizza/orders/MAKE_ORDER_ERROR';

export const makeOrderRequest = (order) => ({
	type: MAKE_ORDER_REQUEST,
	payload: order,
});

export const makeOrderSuccess = (message) => ({
	type: MAKE_ORDER_SUCCESS,
	payload: message,
});

export const makeOrderError = (error) => ({
	type: MAKE_ORDER_ERROR,
	payload: error,
});

export default {
	makeOrderRequest,
	makeOrderError,
	makeOrderSuccess,
};

export const types = {
	MAKE_ORDER_REQUEST,
	MAKE_ORDER_PENDING,
	MAKE_ORDER_SUCCESS,
	MAKE_ORDER_ERROR,
};
