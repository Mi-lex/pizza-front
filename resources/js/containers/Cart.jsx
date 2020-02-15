import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from '../../css/modules/Cart.module.css';
import { classesExtractor } from '../utils';
import CartItem from '../components/CartItem';
import {
	incrementItem,
	decrementItem,
	removeItem,
} from '../redux/ducks/cart/actions';
import CartHeader from '../components/CartHeader';

const Cart = () => {
	const [isOpen, toggleCart] = useState(false);
	const { cartItems, currency } = useSelector((state) => ({
		cartItems: state.cartItems,
		currency: state.currency,
	}));
	const dispatch = useDispatch();

	const { totalSumm, itemCount } = cartItems.reduce(
		(accum, cartItem) => {
			accum.totalSumm += cartItem.price * cartItem.quantity;
			accum.itemCount += cartItem.quantity;

			return accum;
		},
		{ totalSumm: 0, itemCount: 0 },
	);

	const toggleCartHanlder = () => {
		toggleCart(!isOpen);
	};

	const incrementHandler = (item) => {
		return () => {
			dispatch(incrementItem(item));
		};
	};

	const decrementHanlder = (item) => {
		return () => {
			dispatch(decrementItem(item));
		};
	};

	const removeItemHanlder = (item) => {
		return () => {
			dispatch(removeItem(item));
		};
	};

	useEffect(() => {
		if (itemCount === 0 && isOpen) {
			toggleCart(false);
		}
	}, [itemCount]);

	const containerClasses = ['container'];

	if (isOpen) {
		containerClasses.push('open');
	}

	return (
		<div className={classesExtractor(classes, containerClasses)}>
			<CartHeader
				currency={currency}
				itemCount={itemCount}
				totalSumm={totalSumm}
				onClick={toggleCartHanlder}
				isCartOpen={isOpen}
			/>
			<div className={classes.body}>
				<ul className={classes.list}>
					{cartItems
						.map((item) => {
							return (
								<CartItem
									key={item.id}
									item={item}
									currency={currency}
									onIncrementClick={incrementHandler(item)}
									onDecrementClick={decrementHanlder(item)}
									onRemoveItemClick={removeItemHanlder(item)}
								/>
							);
						})
						.reverse()}
				</ul>
				<Link to="/checkout" className={classes.link}>
					Checkout
				</Link>
			</div>
		</div>
	);
};

export default Cart;
