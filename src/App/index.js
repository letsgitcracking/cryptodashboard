import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout';
import './App.css';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <WelcomeMessage />
      </AppLayout>
    );
  }
}

export default App;