import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Menu, Orders, Checkout, Login, Register } from '../pages';
import AppHeader from '../components/AppHeader';

const App = () => {
	return (
		<Router>
			<AppHeader />
			<main>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/menu/:type" component={Menu} />
					<Route path="/orders" component={Orders} />
					<Route path="/checkout" component={Checkout} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
