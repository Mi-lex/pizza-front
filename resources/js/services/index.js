import axios from 'axios';

const api = axios.create({
	baseURL: 'http://127.0.0.1:8000/api'
});

const fetchMenuItems = async (url) => {
	const response = await api.get(url);

	return response.data;
};

const storeOrder = async (url, order) => {
	const response = await api.post(url, order);

	return response.data.message;
};

const authUser = async (url, user) => {
	const response = await api.post(url, user);

	return response.data.phone;
};

const fetchUserOrders = async (url) => {
	const response = await api.get(url);

	return response.data;
};

const getMessageFromError = (error) => {
	let message;
	if (error.response) {
		if (error.response.data.errors) {
			message = Object.values(error.response.data.errors)
				.map((input) => input.toString())
				.join('');
		} else {
			message = error.response.data.message;
		}
	} else {
		message = error.message;
	}

	return message;
};

export default {
	getMessageFromError,
	fetchMenuItems,
	storeOrder,
	authUser,
	fetchUserOrders,
};
