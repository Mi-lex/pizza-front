import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Switcher from '../components/Switcher';
import classes from '../../css/modules/CurrencySwitcher.module.css';
import { changeCurrency } from '../redux/ducks/currency/actions';

const CurrencySwitcher = () => {
	const currency = useSelector((state) => state.currency.name);
	const dispatch = useDispatch();

	const handleCurrencySwitch = (newCurrency) => {
		dispatch(changeCurrency(newCurrency));
	};

	return (
		<div className={classes.container}>
			<p>Your currency is</p>
			<Switcher
				firstOption="dollar"
				secondOption="euro"
				firstLabel="$"
				secondLabel="€"
				defaultOption={currency}
				onChange={handleCurrencySwitch}
			/>
		</div>
	);
};

export default CurrencySwitcher;
