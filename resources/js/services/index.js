import axios from 'axios';

export const baseUrl = 'http://alex-pizza.spb/api';

const fetchMenuItems = async (url) => {
	const response = await axios.get(url);

	return response.data;
};

const storeOrder = async (url, order) => {
	const message = await axios.post(url, order);

	return message;
};

export default {
	fetchMenuItems,
	storeOrder,
};
