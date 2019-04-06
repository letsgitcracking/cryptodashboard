import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage';
import './App.css';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage />
      </div>
    );
  }
}

export default App;