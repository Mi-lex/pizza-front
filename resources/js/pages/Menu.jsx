import React, { useEffect, useState } from 'react';
import { NavLink, useRouteMatch, useParams } from 'react-router-dom';
import classes from '../../css/modules/Menu.module.css';
import MenuItem from '../components/MenuItem';

const Menu = () => {
	const { url } = useRouteMatch();
	const { type = 'pizza' } = useParams();

	const [items, setItems] = useState([]);

	useEffect(() => {
		console.log('checking');

		(async function fetchMenuItems() {
			try {
				const response = await fetch('http://localhost:8000/api/menu_items');

				const items = await response.json();

				setItems(items);
			} catch (e) {
				console.error(e);
			}
		})();
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
				<ul className={classes.menuList}>
					{items.map((menuItem) => {
						const { name, id, type, description, price } = menuItem;
						// Could have used spread operator ofc, it's for readability
						return (
							<MenuItem
								key={id}
								name={name}
								type={type}
								description={description}
								price={price}
							/>
						);
					})}
				</ul>
			</section>
		</div>
	);
};

export default Menu;
