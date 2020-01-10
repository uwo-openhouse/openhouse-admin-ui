import React from 'react';
import * as PropTypes from 'prop-types';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignedInLayout.scss';


const SignedInLayout = ({ children }) => (
    <div>
        <Navbar bg="light" expand="lg">
            <Link to="/">
                <Navbar.Brand>Open House</Navbar.Brand>
            </Link>
            <Nav>
                <Link to="/locations">
                    <Navbar.Text>Buildings</Navbar.Text>
                </Link>
                <Link to="/departments">
                    <Navbar.Text>Departments</Navbar.Text>
                </Link>
                <Link to="/openhouses">
                    <Navbar.Text>Open Houses</Navbar.Text>
                </Link>
                <Link to="/events">
                    <Navbar.Text>Events</Navbar.Text>
                </Link>
            </Nav>
        </Navbar>
        {children}
    </div>
);

SignedInLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default SignedInLayout;
