import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import classes from '../../css/modules/MenuList.module.css';

const MenuList = ({ items, currency }) => {
	return (
		<ul className={classes.menuList}>
			{items.map((menuItem) => {
				const { name, id, type, description, price } = menuItem;
				// Could have used spread operator ofc, it's for readability
				return (
					<MenuItem
						key={id}
						// name={name}
						name={name}
						type={type}
						description={description}
						currency={currency}
						price={price}
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
