import React from 'react';
import * as PropTypes from 'prop-types';
import {
    Button, Nav, Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignedInLayout.scss';
import { isAuthEnabled } from '../service/auth';
import { gotoLoginPage } from '../service';


const SignedInLayout = ({ children, onPurgeAuth }) => (
    <div>
        <Navbar bg="light" expand="sm">
            <Link to="/">
                <Navbar.Brand>
                    <img
                        className="brand-image"
                        alt="Logo"
                        src="/brand.svg"
                        width="30"
                        height="30"
                    />
                </Navbar.Brand>
            </Link>
            <Nav>
                <Link to="/locations">
                    <Navbar.Text>Buildings</Navbar.Text>
                </Link>
                <Link to="/areas">
                    <Navbar.Text>Areas</Navbar.Text>
                </Link>
                <Link to="/openhouses">
                    <Navbar.Text>Open Houses</Navbar.Text>
                </Link>
                <Link to="/events">
                    <Navbar.Text>Events</Navbar.Text>
                </Link>
                <Link to="/eateries">
                    <Navbar.Text>Eateries</Navbar.Text>
                </Link>
            </Nav>
            <Nav className="ml-auto">
                <Button onClick={() => {
                    onPurgeAuth();
                    if (isAuthEnabled()) {
                        gotoLoginPage();
                    }
                }}
                >
Logout
                </Button>
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
    onPurgeAuth: PropTypes.func.isRequired,
};

export default SignedInLayout;
