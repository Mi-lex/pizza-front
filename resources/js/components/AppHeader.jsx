import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PizzaIcon from '../../img/logo.svg';
import LoginIcon from '../../img/login.svg';
import classes from '../../css/modules/AppHeader.module.css';

const AppHeader = () => {
	const isLoggedIn = false;

	return (
		<header className={classes.header}>
			<div className="container db-flex justify-content-between align-items-center">
				<Link to="/" className={classes.logo}>
					<PizzaIcon />
					Pizza Alex
				</Link>
				<nav className="db-flex">
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
