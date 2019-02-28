import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

// Components
import FriendForm from '../FriendForm';

class Navigation extends Component {
    state = {
        isOpen: false,
    };


    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md" >
                <NavbarBrand href="/">React Friends</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <FriendForm onClick={this.props.toggleModal} addFriend={this.props.addFriend} />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Navigation
