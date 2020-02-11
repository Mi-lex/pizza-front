import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import classes from '../../css/components/ErrorMessage.module.css';

const ErrorMessage = ({ children }) => {
	// must be controlled through redux, but I got too lazy at this point
	const [hidden, hideError] = useState(false);

	return (
		<div
			hidden={hidden}
			onClick={() => {
				hideError(true);
			}}
			className={classes.layout}
		>
			<div className={classes.error}>{children}</div>
		</div>
	);
};

ErrorMessage.propTypes = {
	children: PropTypes.string.isRequired,
};

export default ErrorMessage;
