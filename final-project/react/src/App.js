import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import SignUp from './pages/SignUp';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/sign-up">
					<SignUp />
				</Route>
				<Route exact path="/hello">
					<p>a text</p>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
