import React from 'react';
import { Card } from 'react-bootstrap';
import * as PropTypes from 'prop-types';

const LocationEditListElement = ({ name }) => (
    <>
        <Card.Title>{name}</Card.Title>
    </>
);

LocationEditListElement.propTypes = {
    name: PropTypes.string.isRequired,
};

export default LocationEditListElement;
