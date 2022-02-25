
import React, {useState, useEffect} from 'react';

import { Redirect } from 'react-router-dom';
function Feed() {
	const [ loggedIn, setLoggedIn ] = localStorage.token ? useState(true) : useState(false);

	if (!loggedIn) {
		return (
			<Redirect to='/log-in' />
		);
	}
	useEffect( () => {
		const response =  fetch(
			'/api/feed',
			{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + localStorage.token,
				}
			}
		);
		response
			.then(res => res.json())
			.then(res => console.log(res))
	});

	
	return (
		<div>
			<h1>Feed Page</h1>
		</div>
	);
}

export default Feed;
