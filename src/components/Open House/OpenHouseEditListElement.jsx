import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { getDefaultTimezone } from '../../service';

const LocationEditListElement = ({ name, date, visible }) => (
    <>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {moment.unix(date).tz(getDefaultTimezone()).format('MMMM Do YYYY')}
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
