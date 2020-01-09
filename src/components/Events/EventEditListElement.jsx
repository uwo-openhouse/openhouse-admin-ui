import { Badge, Card } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import React from 'react';
import './EventEditListElement.scss';

const EventEditListElement = ({
    name, description, departmentName, buildingName, openHouseName,
}) => (
    <>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {description}
            <Badge variant="primary">
                {openHouseName}
            </Badge>
            <Badge variant="info">
                {departmentName}
            </Badge>
            <Badge variant="info">
                {buildingName}
            </Badge>
        </Card.Text>

    </>
);

EventEditListElement.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    departmentName: PropTypes.string.isRequired,
    buildingName: PropTypes.string.isRequired,
    openHouseName: PropTypes.string.isRequired,
};

export default EventEditListElement;
