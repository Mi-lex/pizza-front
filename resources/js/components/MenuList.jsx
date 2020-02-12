import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import classes from '../../css/modules/MenuList.module.css';
import { useParams } from 'react-router-dom';

const MenuList = ({ items, currency, addToTheCartHandler }) => {
	const { filter = 'pizza' } = useParams();

	return (
		<ul className={classes.menuList}>
			{items
				.filter((menuItem) => menuItem.type == filter)
				.map((menuItem) => {
					return (
						<MenuItem
							key={menuItem.id}
							item={menuItem}
							currency={currency}
							addToTheCartHandler={addToTheCartHandler.bind(null, menuItem)}
						/>
					);
				})}
		</ul>
	);
};

MenuList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MenuList;
