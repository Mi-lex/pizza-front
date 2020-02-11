import { types } from './actions';

const findInTheCart = (item, cartItems) => {
	const foundItem = cartItems.find((cartItem) => cartItem.id === item.id);

	return {
		foundItem,
		updatedCartItems: [...cartItems],
	};
};

const removeFromCart = (item, cartItems) => {
	return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_ITEM: {
			const item = action.payload;
			const { foundItem, updatedCartItems } = findInTheCart(item, state);

			if (foundItem) {
				foundItem.quantity++;
			} else {
				const { id, name, type, price } = item;
				console.log(id);

				updatedCartItems.push({
					id,
					name,
					type,
					price,
					quantity: 1,
				});
			}

			return updatedCartItems;
		}
		case types.REMOVE_ITEM: {
			return removeFromCart(action.payload, state);
		}
		case types.INCREMENT_ITEM: {
			const { foundItem, updatedCartItems } = findInTheCart(
				action.payload,
				state,
			);
			foundItem.quantity++;

			return updatedCartItems;
		}
		case types.DECREMENT_ITEM: {
			const { foundItem, updatedCartItems } = findInTheCart(
				action.payload,
				state,
			);

			if (foundItem.quantity === 1) {
				return removeFromCart(foundItem, updatedCartItems);
			}
			foundItem.quantity--;
			return updatedCartItems;
		}
		default:
			return state;
	}
};

export default reducer;
