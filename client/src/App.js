import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';
import Navigation from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Friends />
      </div>
    );
  }
}

export default App;
