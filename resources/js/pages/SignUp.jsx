import React from 'react';
import StyledForm from '../components/StyledForm';

const SignUp = () => {
	return (
		<div className="container lg">
			<h2 style={{ width: '100%', marginBottom: 0 }}>Sign up</h2>
			<StyledForm style={{ maxWidth: '80%', margin: '0 auto' }}>
				<input type="number" placeholder="Number" />
				<input type="password" placeholder="Password" />
				<input type="password" placeholder="Confirm your password" />
				<input type="submit" value="Sign up" id="input-submit" />
			</StyledForm>
		</div>
	);
};

export default SignUp;
