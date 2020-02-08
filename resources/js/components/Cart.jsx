import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../../css/modules/Cart.module.css';
import CartIcon from '../../img/cart.svg';
import ArrowIcon from '../../img/arrow.svg';
import { classesExtractor } from '../utils';
import CartItem from './CartItem';

const Cart = () => {
	const [isOpen, toggleCart] = useState(true);

	const fakeCardItems = [
		{
			name: 'CLassic super',
			type: 'pizza',
			description:
				' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore provident inventore, saepe dolores repudiandae est nisi perspiciatis cupiditate laboriosam, illo sunt cum maiores recusandae earum fugiat harum numquam pariatur.',
			summ: 12,
			quantity: 1,
		},
		{
			name: 'Greek',
			type: 'pizza',
			description:
				' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore provident inventore, saepe dolores repudiandae est nisi perspiciatis cupiditate laboriosam, illo sunt cum maiores recusandae earum fugiat harum numquam pariatur.',
			summ: 12,
			quantity: 1,
		},
		{
			name: 'Greek',
			type: 'pizza',
			description:
				' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore provident inventore, saepe dolores repudiandae est nisi perspiciatis cupiditate laboriosam, illo sunt cum maiores recusandae earum fugiat harum numquam pariatur.',
			summ: 12,
			quantity: 1,
		},
	];
	const itemCount = fakeCardItems.length;

	const onClickHandler = () => {
		if (itemCount < 1) {
			return;
		}
		toggleCart(!isOpen);
	};

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
			>
				<CartIcon className={classes.icon} />
				{itemCount > 0
					? `${itemCount} item${itemCount > 1 ? 's' : ''}`
					: 'Empty cart'}
				<ArrowIcon className={classesExtractor(classes, ['icon', 'arrow'])} />
			</button>
			<div className={classes.body}>
				<ul className={classes.list}>
					{fakeCardItems.map(({ name, quantity }) => (
						<CartItem
							key={name}
							name={name}
							quantity={quantity}
						/>
					))}
				</ul>
				<Link to="/checkout" className={classes.link}>
					Checkout
				</Link>
			</div>
		</div>
	);
};

export default Cart;
