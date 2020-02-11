import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import classes from '../../css/modules/MenuList.module.css';

const MenuList = ({ items, currency, addToTheCartHandler }) => {
	return (
		<ul className={classes.menuList}>
			{items.map((menuItem) => {
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
