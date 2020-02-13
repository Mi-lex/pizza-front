import axios from 'axios';

export const baseUrl = 'http://localhost:8000';

const fetchMenuItems = async (url) => {
	const response = await axios.get(url);

	return response.data;
};

const storeOrder = async (url, order) => {
	const response = await axios.post(url, order);

	return response.data.message;
};

const authUser = async (url, user) => {
	const response = await axios.post(url, user);

	return response.data.phone;
};

const fetchUserOrders = async (url) => {
	const response = await axios.get(url);

	return response.data;
};

export default {
	fetchMenuItems,
	storeOrder,
	authUser,
	fetchUserOrders,
};
