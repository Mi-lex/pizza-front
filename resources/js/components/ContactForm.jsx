import React from 'react';
import StyledForm from './StyledForm';

const ContactForm = () => {
	return (
		<StyledForm style={{ maxWidth: ' 330px' }}>
			<input type="number" id="input-number" placeholder="Number" />
			<textarea name="address" type="text" placeholder="Address" />
			<input type="submit" value="Checkout" id="input-submit" />
		</StyledForm>
	);
};

export default ContactForm;
