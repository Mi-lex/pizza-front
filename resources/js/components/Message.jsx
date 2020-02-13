import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import classes from '../../css/modules/Message.module.css';

const Message = ({ children, style, onHide }) => {
	const [hidden, hideMessage] = useState(false);

	const hideMessageHandler = () => {
		hideMessage(true);
		onHide();
	};

	return (
		<div
			hidden={hidden}
			onClick={hideMessageHandler}
			style={style}
			className={classes.layout}
		>
			<div className={classes.message}>{children}</div>
		</div>
	);
};

Message.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
		PropTypes.array,
	]).isRequired,
	style: PropTypes.object,
	onHide: PropTypes.func,
};

Message.defaultProps = {
	style: {},
	onHide: () => {},
};

export default Message;
