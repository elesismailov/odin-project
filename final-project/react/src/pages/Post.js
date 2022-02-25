import React, { useEffect, useState, useRef } from 'react';
import { useParams, Redirect } from 'react-router-dom';

function Post() {
	
	const { id } = useParams();
	const [post, setPost] = useState(null);
	const msg = useRef(null);

	const [ loggedIn, setLoggedIn ] = localStorage.token ? useState(true) : useState(false);

	if (!loggedIn) {
		return (
			<Redirect to='/log-in' />
		);
	}
	function showPost(post) {
		msg.current.textContent = post.title;
	}

	useEffect(() => {
		const response = fetch( '/api/post/' + id, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.token,
			},
		});
		response
			.then(res => res.json())
			.then(res => setPost(res.post))
	});

	// the idea: instead of using refs, use state and dynamic rendering
	// once the post is fetched, set the state, that will rerender the component
	// add a conditional statement to the rendering
	return (
		<div>
		{ post
			? <div> 
				<p>	Title: {post.title}</p>
				<p>	Text: {post.text}</p>
			  </div>
			: 
			<div>
				<h1>A Post page</h1>
				<p ref={msg}>Loading...</p>
			</div>
		}
		</div>
	);
}

export default Post;
