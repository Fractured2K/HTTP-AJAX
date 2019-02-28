import React, { Component } from 'react';
import axios from 'axios';

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
    state = {
        modal: false,
        name: '',
        age: '',
        email: ''
    };

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

    addFriend = (e) => {
        e.preventDefault();

        const newFriend = {
            name: this.state.name,
            age: parseInt(this.state.age, 10),
            email: this.state.email
        }

        this.props.addFriend(newFriend)

        this.setState({
            name: '',
            age: '',
            email: ''
        })
    }

    render() {
        return (
            <div>
                <div>
                    <Button color="primary" onClick={this.toggle}>Add Friend</Button>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Friend</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.addFriend}>
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
                                <Button type="submit" color="success" onClick={this.toggle}>Add Friend</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default AddFriend
