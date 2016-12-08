import React from 'react';
import {Link} from 'react-router';

export default function Message(props) {
	let msglink = '/' + props.route + '/' + props.msg.id;
	console.log(props);
	return (
		<div>
			<Link to={msglink}>{props.msg.title}</Link>
			<h3>from: {props.msg.from}</h3>	
			<h3>to: {props.msg.to}</h3>
			<h3>title: {props.msg.title}</h3>
			<h4>content: {props.msg.content}</h4>
		</div> 

		);
};