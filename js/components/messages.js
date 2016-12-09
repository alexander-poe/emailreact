import React from 'react';
import Emails from '../email';
import Message from './message';

export default function Messages(props) {
	
	const messages = props.msgs.map(function(msg) {
		return <Message key={ msg.id }  msg={ msg }/>
		});

	return(
		<div>
			{ messages }
		</div>
		);
	
};
