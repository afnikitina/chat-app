import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "Asya",
         messages: ['Hello World!',
         'message number two']
      };
   }

   addNewMessage = message => {
      this.setState({messages: [...this.state.messages, message]});
   }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.state.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <ChatWindow messages={this.state.messages} />
         <ChatImput addNewMessage={this.addNewMessage} />
      </div>
    );
  }
}

export default App;
