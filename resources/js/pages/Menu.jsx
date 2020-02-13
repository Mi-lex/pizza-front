import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import { fetchItemsRequest } from '../redux/ducks/menu-items/actions';
import { addItem as addToTheCart } from '../redux/ducks/cart/actions';
import classes from '../../css/modules/Menu.module.css';
import MenuList from '../components/MenuList';
import Spinner from '../components/Spinner';
import Message from '../components/Message';

const Menu = () => {
	const { url, path } = useRouteMatch();

	const {
		currency,
		menuItems: { list: items, pending, error },
	} = useSelector((state) => ({
		currency: state.currency,
		menuItems: state.menuItems,
	}));

	const dispatch = useDispatch();

	const addToTheCartHandler = (item) => {
		dispatch(addToTheCart(item));
	};

	useEffect(() => {
		if (items.length === 0) {
			dispatch(fetchItemsRequest());
		}
	}, []);

	return (
		<div className="container lg">
			<section>
				<h2 className="visually-hidden">Menu</h2>
				<nav>
					<ul className={classes.navList}>
						<li>
							<NavLink
								className={classes.link}
								activeClassName={classes.active}
								to={`${url}/drinks`}
							>
								Drinks
							</NavLink>
						</li>
						<li>
							<NavLink
								className={classes.link}
								activeClassName={classes.active}
								to={`${url}/pizza`}
							>
								Pizza
							</NavLink>
						</li>
						<li>
							<NavLink
								className={classes.link}
								activeClassName={classes.active}
								to={`${url}/sweets`}
							>
								Sweets
							</NavLink>
						</li>
					</ul>
				</nav>
				{pending ? (
					<Spinner />
				) : error ? (
					<Message style={{ color: 'red', left: 0 }}>{error}</Message>
				) : (
					<Route path={`${path}/:filter?`}>
						<MenuList
							currency={currency}
							items={items}
							addToTheCartHandler={addToTheCartHandler}
						/>
					</Route>
				)}
			</section>
		</div>
	);
};

export default Menu;
