import React from 'react';
import PropTypes from 'prop-types';
import { CartIcon, ArrowIcon } from '../assets/img';
import classes from '../../css/modules/CartHeader.module.css';
import { toFixed } from '../utils';

const CartHeader = (props) => {
	const { itemCount, onClick, currency, totalSumm, isCartOpen } = props;

	const currencyTotalSumm = toFixed(totalSumm * currency.toDollarRatio, 2);

	let headerChildren = 'Empty Cart';

	if (itemCount > 0) {
		const itemWord = itemCount > 1 ? 'items' : 'item';

		headerChildren = (
			<div>
				<span className={classes.total}>
					{currencyTotalSumm}
					{currency.symbol}
				</span>
				<span>{`${itemCount} ${itemWord}`}</span>
			</div>
		);
	}

	const arrowStyle = isCartOpen ? { transform: 'rotate(180deg)', } : {};

	return (
		<button
			type="button"
			className={classes.toggler}
			onClick={onClick}
			disabled={itemCount === 0}
		>
			<CartIcon className={classes.icon} />
			{headerChildren}
			<ArrowIcon
				style={arrowStyle}
				className={`${classes.icon} ${classes.arrow}`}
			/>
		</button>
	);
};

CartHeader.propTypes = {
	itemCount: PropTypes.number.isRequired,
	totalSumm: PropTypes.number.isRequired,
	isCartOpen: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	currency: PropTypes.shape({
		name: PropTypes.string,
		toDollarRatio: PropTypes.number,
		symbol: PropTypes.string,
	}).isRequired,
};

export default CartHeader;
