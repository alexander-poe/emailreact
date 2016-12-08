//render mailbox with messages
import React from 'react';
import Email from '../email';
import Messages from './messages';

import {Link} from 'react-router';
export default function Mailbox(props) {
let messages = [];
let keys = Object.keys(Email[props.params.email_box]);
keys.forEach(function(key) {
	messages.push(Email[props.params.email_box][key]);
})
	return (
		<div>
			<h1> 
				Mailbox {props.params.email_box}
			</h1>

			<Link to={'/spam/'}>Spam!</Link><br/>
			<Link to={'/inbox/'}>Real Mail</Link>

			<div>
					
				<Messages msgs={messages}/>
			</div>
		</div>			
		);
};