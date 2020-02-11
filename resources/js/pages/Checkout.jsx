import React from 'react';
import { useSelector } from 'react-redux';
import classes from '../../css/modules/Checkout.module.css';
import Receipt from '../components/Receipt';
import ContactForm from '../components/ContactForm';

const Checkout = () => {
	const { cartItems, currency } = useSelector((state) => state);

	return (
		<div
			style={{ paddingBottom: '2.5rem' }}
			className="container lg d-flex justify-content-around flex-wrap"
		>
			<h2 className={classes.title}>Checkout</h2>
			<ContactForm />
			<Receipt cartItems={cartItems} currency={currency} />
		</div>
	);
};

export default Checkout;
