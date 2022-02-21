
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
	event.preventDefault()
	const response = fetch('/api/log-in', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: event.target.email.value,
			password: event.target.password.value
		})
	});
	response
		.then(res => res.json())
		.then(res => saveToken(res.token))
		.catch(err => console.log('Email or password are wrong'))
}

function saveToken(token) {
	localStorage.setItem('token', token)
}

export default LogIn;
