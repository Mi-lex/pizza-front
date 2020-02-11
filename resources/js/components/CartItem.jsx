import React from 'react';
import PropTypes from 'prop-types';
import IncrDecrCockpit from './IncrDecrCockpit';
import classes from '../../css/modules/CartItem.module.css';
import { toFixed } from '../utils';

const CartItem = (props) => {
	const {
		item,
		currency,
		onIncrementClick,
		onDecrementClick,
		onRemoveItemClick,
	} = props;

	const { name, type, price, quantity } = item;
	const currencyPrice = toFixed(price * currency.toDollarRatio, 2);

	return (
		<div className={classes.container}>
			<img
				className={classes.img}
				src={`img/menu_items/${type}/${name
					.toLowerCase()
					.replace(/ /g, '_')}.png`}
				alt={`${type}-${name}`}
			/>
			<div className={classes.body}>
				<h3 className={classes.title}>{name}</h3>
				<div className="d-flex justify-content-between align-items-center">
					<IncrDecrCockpit
						amount={quantity}
						onIncrement={onIncrementClick}
						onDecrement={onDecrementClick}
					/>

					<span className={classes.summ}>{`${currencyPrice * quantity}${currency.symbol}`}</span>
				</div>
			</div>
		</div>
	);
};

CartItem.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		quantity: PropTypes.number.isRequired,
	}).isRequired,
	onIncrementClick: PropTypes.func.isRequired,
	onDecrementClick: PropTypes.func.isRequired,
	onRemoveItemClick: PropTypes.func.isRequired,
	currency: PropTypes.shape({
		name: PropTypes.string,
		toDollarRatio: PropTypes.number,
		symbol: PropTypes.string,
	}).isRequired,
};

export default CartItem;
