import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

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
			</Switch>
		</Router>
	);
}

export default App;
