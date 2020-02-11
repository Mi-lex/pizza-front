import React from 'react';
import PropTypes from 'prop-types';
import IncrDecrCockpit from './IncrDecrCockpit';
import classes from '../../css/modules/MenuItem.module.css';
import { toFixed } from '../utils';

const MenuItem = ({ item, currency, addToTheCartHandler }) => {
	const { name, type, description, price } = item;

	const currencyPrice = toFixed(price * currency.toDollarRatio, 2);

	return (
		<div className={classes.container}>
			<img
				src={`img/menu_items/${type}/${name
					.toLowerCase()
					.replace(/ /g, '_')}.png`}
				className={classes.img}
				alt={name}
			/>
			<div className={classes.body}>
				<h3 className={classes.title}>{name}</h3>
				<p className={classes.description}>{description}</p>
				<div className="d-flex justify-content-between align-items-center">
					<span
						className={classes.price}
					>{`${currencyPrice}${currency.symbol}`}</span>

					<IncrDecrCockpit
						iconSize={40}
						decrementer={false}
						displayAmount={false}
						onIncrement={addToTheCartHandler}
					/>
				</div>
			</div>
		</div>
	);
};

MenuItem.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
	}).isRequired,
	currency: PropTypes.shape({
		name: PropTypes.string,
		toDollarRatio: PropTypes.number,
		symbol: PropTypes.string,
	}).isRequired,
};

export default MenuItem;
