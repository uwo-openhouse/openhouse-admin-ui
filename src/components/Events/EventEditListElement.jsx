import { Badge, Card } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import React from 'react';
import './EventEditListElement.scss';
import moment from 'moment';

const EventEditListElement = ({
    name, description, areaName, buildingName, openHouseName, time,
}) => (
    <>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{moment(time, 'H:m').format('h:m A')}</Card.Subtitle>
        <Card.Text>
            {description}
            <Badge variant="primary">
                {openHouseName}
            </Badge>
            <Badge variant="info">
                {areaName}
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
    areaName: PropTypes.string.isRequired,
    buildingName: PropTypes.string.isRequired,
    openHouseName: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default EventEditListElement;
