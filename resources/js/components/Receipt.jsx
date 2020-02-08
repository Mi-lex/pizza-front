import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../css/modules/Receipt.module.css';

const Receipt = (props) => {
	const { cartItems } = props;

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
								const { id, name, qty } = item;

								return (
									<tr key={id}>
										<td>{qty}</td>
										<td>{name}</td>
										<td className={classes.alignRight}>$44</td>
									</tr>
								);
							})}
							<tr>
								<td>1</td>
								<td>Banana Nut Muffin</td>
								<td className={classes.alignRight}>$2.00</td>
							</tr>
							<tr>
								<td></td>
								<td className={classes.alignRight}>Tax</td>
								<td className={classes.alignRight}>$0.50</td>
							</tr>
							<tr>
								<td></td>
								<td className={classes.total}>Total</td>
								<td className={classes.total}>$6.75</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

Receipt.propTypes = {
	cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Receipt;
