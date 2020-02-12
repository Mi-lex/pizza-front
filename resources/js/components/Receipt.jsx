import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../css/modules/Receipt.module.css';
import { toFixed } from '../utils';

const Receipt = (props) => {
	const { cartItems, currency, delivery, bill } = props;
	const deliveryCost = 3.5;

	return (
		<div className={classes.receipt}>
			<div className={classes.box}>
				<div>
					<h3>Order Summary</h3>
				</div>
				<div>
					<table>
						<thead>
							<tr>
								<th>QTY</th>
								<th>ITEM</th>
								<th className={classes.alignRight}>PRICE</th>
							</tr>
						</thead>
						<tbody>
							{cartItems.map((item) => {
								const { id, name, quantity, price } = item;

								return (
									<tr key={id}>
										<td>{quantity}</td>
										<td>{name}</td>
										<td className={classes.alignRight}>
											{`${currency.symbol}
											${toFixed(quantity * price * currency.toCurrencyRate, 2)}`}
										</td>
									</tr>
								);
							})}
							<tr>
								<td />
								<td className={classes.alignRight}>Delivery</td>
								<td className={classes.alignRight}>{`${
									currency.symbol
								}${toFixed(delivery * currency.toCurrencyRate, 2)}`}</td>
							</tr>
							<tr>
								<td />
								<td className={classes.total}>Total</td>
								<td className={classes.total}>{`${currency.symbol}${bill}`}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

Receipt.propTypes = {
	cartItems: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			quantity: PropTypes.number.isRequired,
			price: PropTypes.string.isRequired,
		}),
	).isRequired,
	currency: PropTypes.shape({
		name: PropTypes.string,
		toCurrencyRate: PropTypes.number.isRequired,
		symbol: PropTypes.string.isRequired,
	}).isRequired,
};

export default Receipt;
