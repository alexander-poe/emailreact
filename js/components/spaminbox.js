import React from 'react';

//url 

export default class Toggle extends React.Component {
	
	let route = ""
		if (props.url === 'inbox') {
			route ='spam';
		} else {
			route ='inbox';
		}
	

	render() {
		return (
			<button type="submit" onClick={this.toggleMail}>ToggleMailBoxes</button>
			)
	}
});