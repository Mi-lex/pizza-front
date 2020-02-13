import React, { useState } from 'react';
import StyledForm from './StyledForm';
import { classesExtractor } from '../utils';

const ContactForm = (props) => {
	const [inputs, setInput] = useState({
		phone: {},
		address: {},
	});

	const { onSubmit } = props;

	const handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let error;

		switch (name) {
			case 'phone':
				error = value.length < 4 ? 'Phone cannot be that short' : null;
				break;
			case 'address':
				error = value.length < 6 ? 'Address cannot be that short' : null;
				break;
			default:
				break;
		}

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
				placeholder="Number"
				onChange={handleChange}
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

export default ContactForm;
