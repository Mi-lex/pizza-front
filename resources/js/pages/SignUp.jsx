import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import StyledForm from '../components/StyledForm';
import {
	signUpRequest,
	signUpError as setError,
	signUpSuccess as setSuccess,
} from '../redux/ducks/auth/actions';
import Spinner from '../components/Spinner';
import Message from '../components/Message';

const SignUp = () => {
	const [inputs, setInput] = useState({
		phone: '',
		password: '',
		password_confirmation: '',
	});
	const { success, error, pending } = useSelector((state) => state.auth.signUp);
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

		const { phone, password, password_confirmation } = inputs;
		if (!phone || !password || !password_confirmation) return;

		dispatch(signUpRequest(inputs));
	};

	useEffect(() => {
		return () => {
			dispatch(setError(null));
			dispatch(setSuccess(false));
		};
	}, []);

	if (success) {
		return <Redirect to="/log-in" />;
	}

	return (
		<div className="container lg">
			<h2 style={{ width: '100%', marginBottom: 0 }}>Sign up</h2>
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
					<input
						onChange={handleChange}
						name="password_confirmation"
						type="password"
						placeholder="Confirm your password"
					/>
					<input type="submit" value="Sign up" id="input-submit" />
				</StyledForm>
			)}
			{error && <Message style={{ color: 'red', left: 0 }}>{error}</Message>}
		</div>
	);
};

export default SignUp;
