import React from 'react';
import * as PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SignedInLayout = ({ children }) => (
    <div>
        <Navbar bg="light" expand="lg">
            <Link to="/">
                <Navbar.Brand>Open House</Navbar.Brand>
            </Link>
            <Link to="/locations">
                <Navbar.Text>Buildings</Navbar.Text>
            </Link>
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
