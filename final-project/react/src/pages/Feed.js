
import React, {useState, useEffect} from 'react';

import { Redirect, Link } from 'react-router-dom';

function Feed() {
	const [ loggedIn, setLoggedIn ] = localStorage.token ? useState(true) : useState(false);
	const [ posts, setPosts ] = useState(null);

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
			.then(res => setPosts(res))
			.catch(err => console.log(err));
	});

	if (posts) {
		const ps = posts.map(p => {
			return (
				<li>
					<p>{p.title}</p>
					<p>{p.text}</p>
					<Link to={'/user/' + p.user}>Author</Link>
				</li>
			);
		});
		return (
			<div>
				<h1>Feed Page</h1>
				<ul>{ ps }</ul>	
			</div>
		);
	}
	
	return (
		<div>
			<h1>Feed Page</h1>
			<p>Loading...</p>
		</div>
	);
}

export default Feed;
