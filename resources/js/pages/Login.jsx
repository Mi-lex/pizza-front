import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import StyledForm from '../components/StyledForm';
import {
	logInRequest,
	logInError as setError,
} from '../redux/ducks/auth/actions';
import Spinner from '../components/Spinner';
import Message from '../components/Message';

const Login = () => {
	const [inputs, setInput] = useState({
		phone: '',
		password: '',
	});
	const { success, error, pending } = useSelector((state) => state.auth.logIn);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;

		setInput({
			...inputs,
			[name]: value,
		});
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();

		const { phone, password } = inputs;
		if (!phone || !password) return;

		dispatch(logInRequest(inputs));
	};

	useEffect(() => {
		return () => {
			dispatch(setError(null));
		};
	}, []);

	if (success) {
		return <Redirect to="/orders" />;
	}

	return (
		<div className="container lg">
			<h2 style={{ width: '100%', marginBottom: 0 }}>Log in</h2>
			{pending ? (
				<Spinner />
			) : (
				<StyledForm
					onSubmit={handleSubmit}
					style={{ maxWidth: '80%', margin: '0 auto' }}
				>
					<input
						onChange={handleChange}
						name="phone"
						type="number"
						placeholder="Phone"
					/>
					<input
						onChange={handleChange}
						name="password"
						type="password"
						placeholder="Password"
					/>
					<input type="submit" value="Login" />
					<div
						style={{ color: 'white' }}
						className="d-flex justify-content-between align-items-center"
					>
						<p>Don&apos;t have an account ? </p>
						<Link style={{ color: '#fac564' }} to="/sign-up">
							Create one
						</Link>
					</div>
				</StyledForm>
			)}
			{error && <Message style={{ color: 'red', left: 0 }}>{error}</Message>}
		</div>
	);
};

export default Login;
