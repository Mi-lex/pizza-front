const FETCH_ITEMS_REQUEST = 'pizza/menu-items/FETCH_ITEMS';
const FETCH_ITEMS_PENDING = 'pizza/menu-items/FETCH_ITEMS';
const FETCH_ITEMS_SUCCESS = 'pizza/menu-items/FETCH_ITEMS_SUCCESS';
const FETCH_ITEMS_ERROR = 'pizza/menu-items/FETCH_ITEMS_ERROR';

export const fetchItemsRequest = () => ({
	type: FETCH_ITEMS_REQUEST,
});

export const fetchItemsSuccess = (items) => ({
	type: FETCH_ITEMS_SUCCESS,
	payload: items,
});

export const fetchItemsError = (error) => ({
	type: FETCH_ITEMS_ERROR,
	payload: error,
});

export default {
	fetchItemsRequest,
	fetchItemsError,
	fetchItemsSuccess,
};

export const types = {
	FETCH_ITEMS_REQUEST,
	FETCH_ITEMS_PENDING,
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_ERROR,
};
