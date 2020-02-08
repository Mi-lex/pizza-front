import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../css/modules/IncrDecrCockpit.module.css';

const IncrDecrCockpit = (props) => {
	const {
		decrementer,
		displayAmount,
		amount,
		onIncrement,
		onDecrement,
		className,
		iconSize,
		...restPorps
	} = props;

	const btnStyles = {
		width: iconSize,
		height: iconSize,
	};

	return (
		<div
			className={`${className} d-flex justify-content-between`}
			{...restPorps}
		>
			<button
				type="button"
				className={classes.btn}
				style={btnStyles}
				onClick={onIncrement}
			>
				+
			</button>
			{displayAmount && amount}
			{decrementer && (
				<button
					type="button"
					className={classes.btn}
					style={btnStyles}
					onClick={onDecrement}
				>
					-
				</button>
			)}
		</div>
	);
};

IncrDecrCockpit.propTypes = {
	onIncrement: PropTypes.func.isRequired,
	decrementer: PropTypes.bool,
	displayAmount: PropTypes.bool,
	amount: PropTypes.number,
	onDecrement: PropTypes.func,
	className: PropTypes.string,
	iconSize: PropTypes.number,
};

IncrDecrCockpit.defaultProps = {
	decrementer: true,
	displayAmount: true,
	amount: 0,
	onDecrement: () => {},
	className: '',
	iconSize: 25,
};

export default IncrDecrCockpit;
