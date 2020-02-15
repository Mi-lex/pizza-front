import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PizzaIcon, OrdersIcon, LoginIcon } from '../assets/img';
import classes from '../../css/modules/AppHeader.module.css';

const AppHeader = () => {
	const loggedIn = useSelector((state) => state.auth.logIn.success);

	return (
		<header className={classes.header}>
			<div className={classes.container}>
				<Link to="/" className={classes.logo}>
					<PizzaIcon />
					Pizza Alex
				</Link>

				<nav className="d-flex">
					<NavLink
						to="/"
						className={classes.link}
						exact
						activeClassName={classes.active}
					>
						Home
					</NavLink>
					<NavLink
						to="/menu/pizza"
						className={classes.link}
						activeClassName={classes.active}
					>
						Menu
					</NavLink>
					{loggedIn ? (
						<NavLink
							to="/orders"
							className={`${classes.link} ${classes.withIcon}`}
							activeClassName={classes.active}
						>
							<OrdersIcon /> My Orders
						</NavLink>
					) : (
						<NavLink
							to="/log-in"
							className={`${classes.link} ${classes.withIcon}`}
							activeClassName={classes.active}
						>
							<LoginIcon />
							Login
						</NavLink>
					)}
				</nav>
			</div>
		</header>
	);
};

export default AppHeader;
