import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends';
import Navigation from './components/layout/Navbar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  addFriend = (friend) => {
    axios.post('http://localhost:5000/friends', { ...friend })
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <Navigation addFriend={this.addFriend} />
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
