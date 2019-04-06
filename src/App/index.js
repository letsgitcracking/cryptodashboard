import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar/>
        <WelcomeMessage />
      </AppLayout>
    );
  }
}

export default App;