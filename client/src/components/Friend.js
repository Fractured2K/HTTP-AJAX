import React from 'react'
import { Button } from 'reactstrap';

const Friend = (props) => {
    return (
        <tr>
            <td>{props.friend.name}</td>
            <td>{props.friend.age}</td>
            <td>{props.friend.email}</td>
            <td>
                <Button color="primary">Edit</Button>{' '}
                <Button color="danger" onClick={() => props.deleteFriend(props.friend.id)}>Delete</Button>
            </td>
        </tr>
    )
}

export default Friend
