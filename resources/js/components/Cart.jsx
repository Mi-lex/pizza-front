import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from '../../css/modules/Cart.module.css';
import { CartIcon, ArrowIcon } from '../assets/img';
import { classesExtractor } from '../utils';
import CartItem from './CartItem';
import {
	incrementItem,
	decrementItem,
	removeItem,
} from '../redux/ducks/cart/actions';

const Cart = () => {
	const [isOpen, toggleCart] = useState(false);
	const { cartItems, currency } = useSelector((state) => ({
		cartItems: state.cartItems,
		currency: state.currency,
	}));
	const dispatch = useDispatch();
	const itemCount = cartItems.length;

	const onClickHandler = () => {
		toggleCart(!isOpen);
	};

	const incrementHandler = (item) => {
		dispatch(incrementItem(item));
	};

	const decrementHanlder = (item) => {
		dispatch(decrementItem(item));
	};

	const removeItemHanlder = (item) => {
		dispatch(removeItem(item));
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
			<button
				type="button"
				className={classes.toggler}
				onClick={onClickHandler}
				disabled={itemCount === 0}
			>
				<CartIcon className={classes.icon} />
				{itemCount > 0
					? `${itemCount} item${itemCount > 1 ? 's' : ''}`
					: 'Empty cart'}
				<ArrowIcon className={classesExtractor(classes, ['icon', 'arrow'])} />
			</button>
			<div className={classes.body}>
				<ul className={classes.list}>
					{cartItems.map((item) => {
						return (
							<CartItem
								key={item.id}
								item={item}
								currency={currency}
								onIncrementClick={incrementHandler.bind(null, item)}
								onDecrementClick={decrementHanlder.bind(null, item)}
								onRemoveItemClick={removeItemHanlder.bind(null, item)}
							/>
						);
					})}
				</ul>
				<Link to="/checkout" className={classes.link}>
					Checkout
				</Link>
			</div>
		</div>
	);
};

export default Cart;
