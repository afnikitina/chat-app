import React, { Component } from 'ract';
import './App.css';

class ChatInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newMessage: '',
		}
	}

	handleChange = (event) => {
		this.setState({ newMessage: event.currentTarget.value});
	}

	render() {
		return (
			<div className="ChatInput">
				<input type="text" value={this.state.newMessage} onChange={this.handleChange} />
				<button onclick={() => {
					this.props.addNewMessage(this.state.newMessage);
					this.state({newMessage: ''})
				}}>Chat
				</button>
			</div>
		);
	}
}

export default ChatInput;