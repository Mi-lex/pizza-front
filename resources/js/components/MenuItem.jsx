import React from 'react';
import PropTypes from 'prop-types';
import IncrDecrCockpit from './IncrDecrCockpit';
import classes from '../../css/modules/MenuItem.module.css';

const MenuItem = (props) => {
	const { name, type, description, price } = props;

	const currency = '$';

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
					<span className={classes.price}>{`${price}${currency}`}</span>

					<IncrDecrCockpit
						iconSize={40}
						decrementer={false}
						displayAmount={false}
						onIncrement={() => {}}
					/>
				</div>
			</div>
		</div>
	);
};

MenuItem.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
};

export default MenuItem;
