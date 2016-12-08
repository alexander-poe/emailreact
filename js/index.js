require('babel-polyfill');
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Mailbox from './components/mailbox'
import Messages from './components/messages'
import Message from './components/messages'

const routes = (
	<Router history={hashHistory}>
		<Route path='/:email_box' component={Mailbox}>
			<IndexRoute component={Messages} />
			<Route path=":messageId" component={Message} />
		</Route>
	</Router>
);



document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(routes, document.getElementById('app'))
);	


