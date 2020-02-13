import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = (props) => {
	const { component: Component, ...restProps } = props;
	const loggedIn = useSelector((state) => state.auth.loggedIn);

	return (
		<Route
			render={
				loggedIn ? <Component {...restProps} /> : <Redirect to="/login" />
			}
		/>
	);
};

export default AuthRoute;
