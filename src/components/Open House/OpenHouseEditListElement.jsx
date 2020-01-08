import React from 'react';
import { Card } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import moment from 'moment';

const LocationEditListElement = ({ name, date }) => (
    <>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {moment.unix(date).utc().format('MMMM Do YYYY')}
        </Card.Text>
    </>
);

LocationEditListElement.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
};

export default LocationEditListElement;
