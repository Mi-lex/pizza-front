import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../css/modules/Spinner.module.css';
import { generateKey } from '../utils';

const Spinner = ({ top, left, width, radius }) => {
	return (
		<section className={classes.container}>
			{Array(12)
				.fill(null)
				.map(() => (
					<div
						key={generateKey()}
						style={{ top, left, width, height: radius }}
					/>
				))}
		</section>
	);
};

Spinner.propTypes = {
	top: PropTypes.string,
	left: PropTypes.string,
	radius: PropTypes.string,
	width: PropTypes.string,
};

Spinner.defaultProps = {
	top: '50%',
	left: '50%',
	radius: '4rem',
	width: '0.5rem',
};

export default Spinner;
