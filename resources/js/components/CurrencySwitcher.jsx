import React from 'react';
import Switcher from './Switcher';
import classes from '../../css/modules/CurrencySwitcher.module.css';

const CurrencySwitcher = () => {
	return (
		<div className={classes.container}>
			<p>Your currency is</p>
			<Switcher
				firstOption="dollar"
				secondOption="eauro"
				firstLabel="$"
				secondLabel="€"
				defaultOption="dollar"
				onChange={() => {}}
			/>
		</div>
	);
};

export default CurrencySwitcher;
