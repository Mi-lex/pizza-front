import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classes from '../../css/modules/Checkout.module.css';
import Receipt from '../components/Receipt';
import ContactForm from '../components/ContactForm';
import { makeOrderRequest } from '../redux/ducks/orders/actions';
import { clearCart } from '../redux/ducks/cart/actions';
import { toFixed, getCartTotal } from '../utils';
import Message from '../components/Message';
import Spinner from '../components/Spinner';

const Checkout = () => {
	const {
		cartItems,
		currency,
		orders: { pending: makeOrderPending, successMessage, errorMessage },
		auth: {
			loggedIn,
			user: { phone: savedPhone },
		},
	} = useSelector((state) => state);

	const delivery = 4;
	const dispatch = useDispatch();
	const bill = toFixed(
		(getCartTotal(cartItems) + delivery) * currency.toCurrencyRate,
		2,
	);

	const makeOrderHandler = (phone, address) => {
		const data = {
			phone,
			address,
			bill,
			cartItems,
		};

		dispatch(makeOrderRequest(data));
	};

	const onSuccess = () => {
		dispatch(clearCart());
	};

	if (cartItems.length === 0) {
		return <Redirect to="/menu/pizza" />;
	}

	return (
		<div
			style={{ paddingBottom: '2.5rem', minHeight: '340px' }}
			className="container lg d-flex justify-content-around flex-wrap"
		>
			{makeOrderPending ? (
				<Spinner />
			) : (
				<>
					<h2 className={classes.title}>Checkout</h2>
					<ContactForm
						loggedIn={loggedIn}
						savedPhone={savedPhone}
						onSubmit={makeOrderHandler}
					/>
					<Receipt
						cartItems={cartItems}
						delivery={delivery}
						bill={bill}
						currency={currency}
					/>
					{successMessage && (
						<Message style={{ color: 'green' }} onHide={onSuccess}>
							{successMessage}
						</Message>
					)}
					)
					{errorMessage && (
						<Message style={{ color: 'red' }}>{errorMessage}</Message>
					)}
					)
				</>
			)}
		</div>
	);
};

export default Checkout;
