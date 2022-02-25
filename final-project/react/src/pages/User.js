
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Redirect } from 'react-router-dom';

function User() {
	
	const { id } = useParams();
	const [user, setUser] = useState(null);
	const msg = useRef(null);

	const [ loggedIn, setLoggedIn ] = localStorage.token ? useState(true) : useState(false);

	if (!loggedIn) {
		return (
			<Redirect to='/log-in' />
		);
	}

	useEffect(() => {
		const response = fetch( '/api/users/' + id, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.token,
			},
		});
		response
			.then(res => res.json())
			.then(res => setUser(res))
	});
	return (
		<div>
		{user
			? <div> 
				<p>	Username: {user.username}</p>
				<p>	Email: {user.email}</p>
				<p>	Friends: {user.friends.length}</p>
			  </div>
			: 
			<div>
				<h1>A User page</h1>
				<p ref={msg}>Loading...</p>
			</div>
		}
		</div>
	);
}

export default User;
