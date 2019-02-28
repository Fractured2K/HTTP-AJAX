import React from 'react'
import { Spinner, Table } from 'reactstrap';

// Components
import Friend from './Friend';

const Friends = (props) => {

    if (props.friends.length === 0) {
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
                {props.friends.map(friend => <Friend key={friend.id} friend={friend} updateFriend={props.updateFriend} deleteFriend={props.deleteFriend} />)}
            </tbody>
        </Table>
    )
}

export default Friends
