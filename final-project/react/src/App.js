import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Feed from './pages/Feed';
import Friends from './pages/Friends';
import Post from './pages/Post';
import User from './pages/User';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/sign-up">

					<SignUp />
				</Route>
				<Route exact path="/log-in">
					<LogIn />
				</Route>
				<Route exact path='/feed'>
					<Feed />
				</Route>
				<Route exact path='/friends'>
					<Friends />
				</Route>
				<Route exact path="/post/:id">
					<Post />
				</Route>
				<Route exact path="/user/:id">
					<User />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
