import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Menu, Orders, Checkout, Login, SignUp } from '../pages';
import AppHeader from '../components/AppHeader';
import Cart from './Cart';
import CurrencySwitcher from './CurrencySwitcher';
import configureStore from '../redux/configureStore';

const store = configureStore();

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<AppHeader />
				<main>
					<div className="container">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/menu" component={Menu} />
							<Route path="/orders" component={Orders} />
							<Route path="/checkout" component={Checkout} />
							<Route path="/log-in" component={Login} />
							<Route path="/sign-up" component={SignUp} />
						</Switch>
						<CurrencySwitcher />
						<Cart />
					</div>
				</main>
			</Router>
		</Provider>
	);
};

export default App;
