import React from 'react'
import { Button } from 'reactstrap';

import UpdateFriendForm from './UpdateFriendForm';

const Friend = (props) => {
    console.log(props)
    return (

        <tr>
            <td>{props.friend.name}</td>
            <td>{props.friend.age}</td>
            <td>{props.friend.email}</td>
            <td>
                <UpdateFriendForm updateFriend={props} />{' '}
                <Button color="danger" onClick={() => props.deleteFriend(props.friend.id)}>Delete</Button>
            </td>
        </tr>
    )
}

export default Friend
