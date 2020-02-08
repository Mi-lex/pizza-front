import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PizzaIcon from '../../img/logo.svg';
import LoginIcon from '../../img/login.svg';
import OrdersIcon from '../../img/order.svg';
import classes from '../../css/modules/AppHeader.module.css';

const AppHeader = () => {
	const isLoggedIn = true;

	return (
		<header className={classes.header}>
			<div className="container d-flex justify-content-between align-items-center">
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
						to="/menu"
						className={classes.link}
						activeClassName={classes.active}
					>
						Menu
					</NavLink>
					{isLoggedIn ? (
						<NavLink
							to="/orders"
							className={`${classes.link} ${classes.withIcon}`}
							activeClassName={classes.active}
						>
							<OrdersIcon />
							{' '}
							My Orders
						</NavLink>
					) : (
						<NavLink
							to="/login"
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
