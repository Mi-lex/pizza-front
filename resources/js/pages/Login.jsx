import React from 'react';
import { Link } from 'react-router-dom';
import StyledForm from '../components/StyledForm';

const Login = () => {
	return (
		<div className="container lg">
			<h2 style={{ width: '100%', marginBottom: 0 }}>Log in</h2>
			<StyledForm style={{ maxWidth: '80%', margin: '0 auto' }}>
				<input type="number" placeholder="Number" />
				<input type="password" placeholder="Password" />
				<input type="submit" value="Login" />
				<div
					style={{ color: 'white' }}
					className="d-flex justify-content-between align-items-center"
				>
					<p>Don&apos;t have account ? </p>
					<Link style={{ color: '#fac564' }} to="/sign-up">
						Create one
					</Link>
				</div>
			</StyledForm>
		</div>
	);
};

export default Login;
