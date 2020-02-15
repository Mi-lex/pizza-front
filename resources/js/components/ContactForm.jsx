import React, { useState } from 'react';import PropTypes from 'prop-types';
import StyledForm from './StyledForm';
import { classesExtractor } from '../utils';

const validatInputLength = (inputName, inputValue, minlength) =>
	(inputValue < minlength
		? `${inputName} must be at least ${minlength} characters long`
		: null);

const ContactForm = (props) => {
	const { onSubmit, loggedIn, savedPhone } = props;

	const [inputs, setInput] = useState({
		phone: {
			value: savedPhone,
		},
		address: {},
	});

	const MinLength = {
		password: 6,
		address: 8,
	};

	const handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		const error = validatInputLength(name, value, MinLength[name]);

		setInput({
			...inputs,
			[name]: {
				...inputs[name],
				value,
				error,
			},
		});
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();

		const {
			phone: { value: phoneValue, error: phoneError },
			address: { value: addressValue, error: addressError },
		} = inputs;
		if (!phoneValue || !addressValue || phoneError || addressError) return;
		onSubmit(phoneValue, addressValue);
	};

	return (
		<StyledForm style={{ maxWidth: ' 330px' }} onSubmit={handleSubmit}>
			<input
				name="phone"
				type="number"
				id="input-number"
				placeholder={loggedIn ? savedPhone : 'Number'}
				onChange={handleChange}
				disabled={loggedIn}
			/>
			{inputs.phone.error && (
				<sup style={{ color: 'red' }} className={classesExtractor.errors}>
					{inputs.phone.error}
				</sup>
			)}
			<textarea
				name="address"
				type="text"
				placeholder="Address"
				onChange={handleChange}
			/>
			{inputs.address.error && (
				<sup style={{ color: 'red' }} className={classesExtractor.errors}>
					{inputs.address.error}
				</sup>
			)}
			<input type="submit" value="Checkout" id="input-submit" />
		</StyledForm>
	);
};

ContactForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	loggedIn: PropTypes.bool.isRequired,
	savedPhone: PropTypes.string,
}

ContactForm.defaultProps = {
	savedPhone: '',
}

export default ContactForm;
