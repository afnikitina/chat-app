import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         messages: [
            'Hello World!',
            'message number two'
         ],
      }
   }

   addNewMessage = (message) => {
		this.setState({messages: [...this.state.messages, message]});
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
         <ChatWindow messages={this.state.messages} />
         <ChatInput addNewMessage={this.addNewMessage} />
      </div>
    );
  }
}

export default App;
