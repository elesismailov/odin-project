
import React from 'react';

function LogIn() {

	return (
		<div>
			<h1> Log In </h1>
			<form onSubmit={handleSubmit}>
				<label>
					<p>Email:</p>
					<input type='text' name='email' required />
				</label>
				<label>
					<p>Password:</p>
					<input type='text' name='password' required />
				</label>
				<button type='submit'>Log In</button>
			</form>
		</div>
	);
}

function handleSubmit(event) {
	console.log(event)
	event.preventDefault()
}

export default LogIn;
