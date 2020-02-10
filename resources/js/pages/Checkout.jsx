import React from 'react';
import classes from '../../css/modules/Checkout.module.css';
import Receipt from '../components/Receipt';
import ContactForm from '../components/ContactForm';

const Checkout = () => {
	return (
		<div className="container lg d-flex justify-content-around flex-wrap">
			<h2 className={classes.title}>Checkout</h2>
			<ContactForm />
			<Receipt cartItems={[]} />
		</div>
	);
};

export default Checkout;
