const CHANGE_CURRENCY = 'pizza/currency/CHANGE_CURRENCY';

export const changeCurrency = (currency) => ({
	type: CHANGE_CURRENCY,
	payload: currency,
});

export const types = {
	CHANGE_CURRENCY,
};
