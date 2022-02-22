
import React, {useState, useEffect} from 'react';

function Friends() {
	useEffect( () => {
		const response =  fetch(
			'/api/friends',
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
			<h1>Friends Page</h1>
		</div>
	);
}

export default Friends;
