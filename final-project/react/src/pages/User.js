
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

function User() {
	
	const { id } = useParams();
	const [user, setUser] = useState(null);
	const msg = useRef(null);

	useEffect(() => {
		const response = fetch( '/api/users/' + id, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.token,
			},
		});
		response
			.then(res => res.json())
			.then(res => {console.log(res)})
	});
	return (
		<div>
			<h1>A User page</h1>
			<p ref={msg}>Loading...</p>
		</div>
	);
}

export default User;
