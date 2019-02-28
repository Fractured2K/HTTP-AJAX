import React, { Component } from 'react';

import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

export class AddFriend extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            name: this.props.updateFriend.friend.name,
            age: this.props.updateFriend.friend.age,
            email: this.props.updateFriend.friend.email
        };
    }


    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updateFriend = (e) => {
        e.preventDefault();

        const friend = {
            id: this.props.updateFriend.friend.id,
            name: this.state.name,
            age: parseInt(this.state.age, 10),
            email: this.state.email
        }

        this.props.updateFriend.updateFriend(friend)
    }

    render() {
        return (
            <>
                <Button color="primary" onClick={this.toggle}>Edit</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Update Friend</ModalHeader>
                    <ModalBody>

                        <form onSubmit={this.updateFriend}>
                            <FormGroup>
                                <Label for="name">Name:</Label>
                                <Input type="text" value={this.state.name} name="name" onChange={this.onChange} placeholder="enter your name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="age">Age:</Label>
                                <Input type="number" value={this.state.age} name="age" onChange={this.onChange} placeholder="enter your age" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email:</Label>
                                <Input type="text" value={this.state.email} name="email" onChange={this.onChange} placeholder="enter your email" />
                            </FormGroup>
                            <ModalFooter>
                                <Button type="submit" color="success" onClick={this.toggle}>Update Friend</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default AddFriend
