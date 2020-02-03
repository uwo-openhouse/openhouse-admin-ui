import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import { displayDate } from '../../service';

const LocationEditListElement = ({ name, date, visible }) => (
    <>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {displayDate(date)}
            {visible && (
                <Badge variant="info">visible</Badge>
            )}
        </Card.Text>
    </>
);

LocationEditListElement.propTypes = {
    name: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    date: PropTypes.number.isRequired,
};

export default LocationEditListElement;
