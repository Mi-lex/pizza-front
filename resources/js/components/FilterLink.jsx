import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ className, activeClass, children, filter }) => {
	return (
		<NavLink
			className={className}
			activeClassName={activeClass}
			exact
			to={filter === '' ? '/pizza' : `/${filter}`}
		>
			{children}
		</NavLink>
	);
};

export default FilterLink;
