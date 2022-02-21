import React from 'react';

function SignUp() {

	return (
		<div>
			<form action='/api/sign-up' method='POST'>
				<label>
					<p>Email:</p>
					<input type='text' name='email' required />
				</label>
				<label>
					<p>Password:</p>
					<input type='text' name='password' required />
				</label>
				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
}

export default SignUp;
