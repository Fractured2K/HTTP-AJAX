import React, { Component } from 'react'
import { Spinner, Table } from 'reactstrap';
import axios from 'axios';

// Components
import Friend from './Friend';

class Friends extends Component {
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

    render() {
        if (this.state.friends.length === 0) {
            return (
                <div>
                    <Spinner color="primary" />
                </div>
            )
        };

        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.friends.map(friend => <Friend friend={friend} />)}
                </tbody>
            </Table>
        )
    }
}

export default Friends
