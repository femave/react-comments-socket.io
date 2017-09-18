import 'core-js/fn/object/assign';
import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory } from 'react-router'

import Home from './routes/Home'
import Sign from './routes/Sign'

const app = document.getElementById('app')

// Render the main component into the dom
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/'component={Home} />
		<Route path='sign'component={Sign} />
	</Router>
	, app);
