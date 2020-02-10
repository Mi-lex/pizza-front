import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Menu, Orders, Checkout, Login, SignUp } from '../pages';
import AppHeader from '../components/AppHeader';
import Cart from '../components/Cart';

const App = () => {
	return (
		<Router>
			<AppHeader />
			<main>
				<div className="container">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/menu/" component={Menu} />
						<Route path="/orders" component={Orders} />
						<Route path="/checkout" component={Checkout} />
						<Route path="/log-in" component={Login} />
						<Route path="/sign-up" component={SignUp} />
					</Switch>
					<Cart />
				</div>
			</main>
		</Router>
	);
};

export default App;
