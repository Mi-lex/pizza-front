import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import classes from '../../css/modules/MenuList.module.css';

const MenuList = (props) => {
	const { items, currency, addToTheCartHandler } = props;
	const { filter = 'pizza' } = useParams();

	return (
		<ul className={classes.menuList}>
			{items
				.filter((menuItem) => menuItem.type === filter)
				.map((menuItem) => (
					<MenuItem
						key={menuItem.id}
						item={menuItem}
						currency={currency}
						addToTheCartHandler={addToTheCartHandler(menuItem)}
					/>
				))}
		</ul>
	);
};

MenuList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	currency: PropTypes.shape({
		name: PropTypes.string,
		toCurrencyRate: PropTypes.number,
		symbol: PropTypes.string,
	}).isRequired,
	addToTheCartHandler: PropTypes.func.isRequired, // return function
};

export default MenuList;
