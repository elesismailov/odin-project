import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
	function handleLogOut() {
		localStorage.clear()
	}
	return (
		<header> 
			<ul>
				{ localStorage.token && 
					<li><Link onClick={handleLogOut} to='/log-in'>Log out</Link></li>
				}
			</ul>
		</header>
	);
}

export default Header;
