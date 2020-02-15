import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ component: Component, ...rest }) => {
	const loggedIn = useSelector((state) => state.auth.logIn.success);

	const renderComponent = (props) =>
		(loggedIn ? <Component {...props} /> : <Redirect to="/log-in" />);

	return <Route {...rest} render={renderComponent} />;
};

AuthRoute.propTypes = {
	component: PropTypes.elementType.isRequired,
};

export default AuthRoute;
