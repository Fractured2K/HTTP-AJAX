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
                {props.friends.map(friend => <Friend friend={friend} />)}
            </tbody>
        </Table>
    )
}

export default Friends
