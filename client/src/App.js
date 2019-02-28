import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends';
import Navigation from './components/layout/Navbar';

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios.get('/.netlify/functions/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  addFriend = (friend) => {
    axios.post('/.netlify/functions/friends', { ...friend })
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  deleteFriend = (id) => {
    axios.delete(`/.netlify/functions/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  updateFriend = (friend) => {
    axios.put(`/.netlify/functions/friends/${friend.id}`, friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <Navigation addFriend={this.addFriend} />
        <Friends friends={this.state.friends} updateFriend={this.updateFriend} deleteFriend={this.deleteFriend} />
      </div>
    );
  }
}

export default App;
