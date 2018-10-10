import React, { Component } from 'ract';
import './App.css';

class ChatWindow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Asya",
		}
	}
	render() {
		return (
			<div className="ChatWindow">
				<h1>505 React Chat</h1>
				<div className="window">
					{this.props.messages.map(message => {return (<div>{message}</div>)})}
				</div>
			</div>
		);
	}
}