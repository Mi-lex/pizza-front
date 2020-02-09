import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../css/modules/Form.module.css';

const StyledForm = ({ children, ...restProps }) => {
	return (
		<form className={classes.form} {...restProps}>
			{children}
		</form>
	);
};

StyledForm.propTypes = {
	children: PropTypes.node.isRequired,
};

export default StyledForm;
