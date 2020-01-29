import { Badge, Card } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import React from 'react';
import './EventEditListElement.scss';
import moment from 'moment';

const displayTime = time => moment(time, 'H:m').format('h:mm A');

const EventEditListElement = ({
    name, description, areaName, buildingName, openHouseName, startTime, endTime, room,
}) => (
    <>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{`${displayTime(startTime)} - ${displayTime(endTime)}`}</Card.Subtitle>
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
                {' '}
                {room}
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
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
};

export default EventEditListElement;
