import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function Header() {
	const [ loggedIn, setLoggedIn ] = localStorage.token ? useState(true) : useState(false);

	function handleLogOut() {
		localStorage.clear()
		setLoggedIn(false)
	}
	return (
		<header> 
			<ul>
				{ loggedIn
					? <li><Link onClick={handleLogOut} to='/log-in'>Log out</Link></li>
					: <li><Link to='/sign-up'>Sign-up</Link></li>
				}
			</ul>
		</header>
	);
}

export default Header;
