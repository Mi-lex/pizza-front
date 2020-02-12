import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import classes from '../../css/modules/Message.module.css';

const Message = ({ children }) => {
	const [hidden, hideMessage] = useState(false);

	return (
		<div
			hidden={hidden}
			onClick={() => {
				hideMessage(true);
			}}
			className={classes.layout}
		>
			<div className={classes.message}>{children}</div>
		</div>
	);
};

Message.propTypes = {
	children: PropTypes.string.isRequired,
};

export default Message;
