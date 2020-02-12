export const classesExtractor = (classesObj, classNames) => {
	return classNames.map((name) => classesObj[name]).join(' ');
};

export const generateKey = () => new Date().getTime() + Math.random();

export const toFixed = (number, decimals) => {
	const x = 10 ** Number(decimals) + 1;
	return (Number(number) + 1 / x).toFixed(decimals);
};

export const getCartTotal = (items) =>
	items.reduce((summ, { price, quantity }) => summ + price * quantity, 0);
