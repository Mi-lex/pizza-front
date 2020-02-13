import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersRequest } from '../redux/ducks/orders/actions';
import Spinner from '../components/Spinner';
import Message from '../components/Message';
import classes from '../../css/modules/Orders.module.css';
import { toFixed } from '../utils';

const Orders = () => {
	const {
		orders: { list: items, pending, fetchOrdersError: error },
		phone,
	} = useSelector((state) => ({
		orders: state.orders,
		phone: state.auth.user.phone,
	}));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchOrdersRequest(phone));
	}, []);

	return (
		<div
			style={{ paddingBottom: '2.5rem', minHeight: '340px' }}
			className="container lg"
		>
			{pending ? (
				<Spinner />
			) : error ? (
				<Message style={{ color: 'red', left: 0 }}>{error}</Message>
			) : (
				<>
					<h2>My orders</h2>
					<ul className={classes.table}>
						<li className={classes.header}>
							<div className={`${classes.col} ${classes['col-1']}`}>
								Order Id
							</div>
							<div className={`${classes.col} ${classes['col-2']}`}>Date</div>
							<div className={`${classes.col} ${classes['col-3']}`}>
								Address
							</div>
							<div className={`${classes.col} ${classes['col-4']}`}>Bill</div>
						</li>
						{items.map((item) => (
							<li className={classes.row} key={item.id}>
								<div
									className={`${classes.col} ${classes['col-1']}`}
									data-label="Order Id"
								>
									{item.id}
								</div>
								<div
									className={`${classes.col} ${classes['col-2']}`}
									data-label="Date"
								>
									{item['created_at']}
								</div>
								<div
									className={`${classes.col} ${classes['col-3']}`}
									data-label="Address"
								>
									{item.address}
								</div>
								<div
									className={`${classes.col} ${classes['col-4']}`}
									data-label="Address"
								>
									${toFixed(item.bill, 2)}
								</div>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default Orders;
