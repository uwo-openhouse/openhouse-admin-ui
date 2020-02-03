import { ListGroup } from 'react-bootstrap';
import React from 'react';
import * as PropTypes from 'prop-types';
import { displayTime } from '../../service';


const EventAttendance = ({ event }) => (
    <ListGroup.Item>
        <h3>{event.name}</h3>
        <h4>{`${displayTime(event.startTime)} - ${displayTime(event.endTime)}`}</h4>
        {`Attendance: ${event.attendees}`}
    </ListGroup.Item>
);


EventAttendance.propTypes = {
    event: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        building: PropTypes.string.isRequired,
        openHouse: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
        room: PropTypes.string.isRequired,
        attendees: PropTypes.number.isRequired,
    }).isRequired,
};

export default EventAttendance;
