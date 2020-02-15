import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ component: Component, ...rest }) => {
	const loggedIn = useSelector((state) => state.auth.logIn.success);

	return (
		<Route
			{...rest}
			render={(props) =>
				loggedIn ? <Component {...props} /> : <Redirect to="/log-in" />
			}
		/>
	);
};

export default AuthRoute;
