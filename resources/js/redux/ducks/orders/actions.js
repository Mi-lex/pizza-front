const MAKE_ORDER_REQUEST = 'pizza/orders/MAKE_ORDER';
const MAKE_ORDER_SUCCESS = 'pizza/orders/MAKE_ORDER_SUCCESS';
const MAKE_ORDER_ERROR = 'pizza/orders/MAKE_ORDER_ERROR';
const FETCH_ORDERS_REQUEST = 'pizza/orders/FETCH_ORDERS_REQUEST';
const FETCH_ORDERS_ERROR = 'pizza/orders/FETCH_ORDERS_ERROR';
const FETCH_ORDERS_SUCCESS = 'pizza/orders/FETCH_ORDERS_SUCCESS';

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

export const fetchOrdersRequest = (phone) => ({
	type: FETCH_ORDERS_REQUEST,
	payload: phone,
});

export const fetchOrdersSuccess = (orders) => ({
	type: FETCH_ORDERS_SUCCESS,
	payload: orders,
});

export const fetchOrdersError = (message) => ({
	type: FETCH_ORDERS_ERROR,
	payload: message,
});

export default {
	makeOrderRequest,
	makeOrderError,
	makeOrderSuccess,
	fetchOrdersRequest,
	fetchOrdersSuccess,
	fetchOrdersError,
};

export const types = {
	MAKE_ORDER_REQUEST,
	MAKE_ORDER_SUCCESS,
	MAKE_ORDER_ERROR,
	FETCH_ORDERS_REQUEST,
	FETCH_ORDERS_SUCCESS,
	FETCH_ORDERS_ERROR,
};
