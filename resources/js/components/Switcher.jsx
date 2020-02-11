import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classes from '../../css/modules/Switcher.module.css';

function Switcher({
	firstOption,
	firstLabel,
	secondOption,
	secondLabel,
	defaultOption,
	selectedOption,
	onChange,
}) {
	const [option, setOption] = useState(defaultOption);
	const actualOption = selectedOption === undefined ? option : selectedOption;
	const isFirstChecked = firstOption === actualOption;

	const handleClick = useCallback(
		(newOption, e) => {
			const actualOption =
				selectedOption === undefined ? option : selectedOption;
			if (actualOption === newOption) return;
			if (onChange) onChange(newOption, e);

			setOption(newOption);
		},
		[option, setOption, selectedOption, onChange],
	);

	const handleFirstClick = useCallback(
		(e) => {
			handleClick(firstOption, e);
		},
		[firstOption, handleClick],
	);

	const handleSecondClick = useCallback(
		(e) => {
			handleClick(secondOption, e);
		},
		[secondOption, handleClick],
	);

	return (
		<div
			className={`${classes.container} ${
				!isFirstChecked ? classes.checked : ''
			}`}
			role="radiogroup"
		>
			<button
				type="button"
				role="radio"
				onClick={handleFirstClick}
				aria-checked={isFirstChecked}
			>
				{firstLabel}
			</button>
			<button
				type="button"
				role="radio"
				onClick={handleSecondClick}
				aria-checked={!isFirstChecked}
			>
				{secondLabel}
			</button>
		</div>
	);
}

Switcher.propTypes = {
	firstOption: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
		.isRequired,
	firstLabel: PropTypes.string.isRequired,
	secondOption: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
		.isRequired,
	secondLabel: PropTypes.string.isRequired,
	defaultOption: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	selectedOption: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	onChange: PropTypes.func.isRequired,
};

export default Switcher;
