import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
	
	const { id } = useParams();
	const [post, setPost] = useState(null);
	const msg = useRef(null);

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
			.then(res => {console.log(res.post)})
	});

	// the idea: instead of using refs, use state and dynamic rendering
	// once the post is fetched, set the state, that will rerender the component
	// add a conditional statement to the rendering
	return (
		<div>
			<h1>A post page</h1>
			<p ref={msg}>Loading...</p>
		</div>
	);
}

export default Post;
