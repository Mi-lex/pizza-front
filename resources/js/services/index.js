export const baseUrl = 'http://localhost:8000/api';

const fetchMenuItems = async (url) => {
	const response = await fetch(url);
	const items = await response.json();

	return items;
};

export default {
	fetchMenuItems,
};
