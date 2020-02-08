import React from 'react';
import PropTypes from 'prop-types';
import IncrDecrCockpit from './IncrDecrCockpit';
import classes from '../../css/modules/CartItem.module.css';

const CartItem = ({ name, quantity }) => {
	const currency = '$';
	const summ = quantity * 12;
	return (
		<div className={classes.container}>
			<img src={`img/menu_items/pizza/${name.toLowerCase().replace(' ', '_')}.png`} className={classes.img} alt={name} />
			<div className={classes.body}>
				<h3 className={classes.title}>{name}</h3>
				<div className="d-flex justify-content-between align-items-center">
					<IncrDecrCockpit amount={quantity} onIncrement={() => {}} />

					<span className={classes.summ}>{`${summ}${currency}`}</span>
				</div>
			</div>
		</div>
	);
};

CartItem.propTypes = {
	name: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
};

export default CartItem;
