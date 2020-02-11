import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useRouteMatch, useParams } from 'react-router-dom';
import { fetchItemsRequest } from '../redux/ducks/menu-items/actions';
import classes from '../../css/modules/Menu.module.css';
import MenuList from '../components/MenuList';
import Spinner from '../components/Spinner';

const Menu = () => {
	const { url } = useRouteMatch();
	const { type = 'pizza' } = useParams();

	const {
		currency,
		menuItems: { list: items, pending, error },
	} = useSelector((state) => ({
		currency: state.currency,
		menuItems: state.menuItems,));

	const dispatch = useDispatch();

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
					<h2 style={{ color: red }}>{error}</h2>
				) : (
					<MenuList currency={currency} items={items} />
				)}
			</section>
		</div>
	);
};

export default Menu;
