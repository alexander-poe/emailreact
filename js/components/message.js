import React from 'react';
import { Link } from 'react-router';

export default function Message(props) {
	
	let msglink = '/' + props.route + '/' + r.id;
	let r = props.msg;
	
	return (
		
		<div>
			
			<Link to={ msglink }> { r.title } </Link>
			<h3> from: { r.from } </h3>	
			<h3> to: { r.to } </h3>
			<h3> title: { r.title } </h3>
			<h4> content: { r.content } </h4>
		
		</div> 

		);
};