import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
	
	const { id } = useParams();
	useEffect(() => {
		const response = fetch;
		console.log(id)
	});
	
	return (
		<div>
			<p>A post page</p>
		</div>
	);
}

export default Post;
