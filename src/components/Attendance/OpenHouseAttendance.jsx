import {
    Accordion, Button, Card, ListGroup,
} from 'react-bootstrap';
import React from 'react';
import * as PropTypes from 'prop-types';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import EventAttendance from './EventAttendance';
import './OpenHouseAttendance.scss';
import { displayDate } from '../../service';


const OpenHouseAttendance = ({ openHouse, events }) => (

    <Card className="attendance-list-element">
        <Card.Body>
            <Card.Title>{`${openHouse.name} (${displayDate(openHouse.date)})`}</Card.Title>
            <Card.Subtitle>{`Attendance: ${openHouse.attendees}`}</Card.Subtitle>
            <Accordion>
                <Accordion.Toggle as={Button} variant="button" eventKey="0">
                    Show Events
                    <FontAwesomeIcon className="accordion-toggle-chevron" icon={faChevronDown} />
                </Accordion.Toggle>
                <Accordion.Collapse className="event-accordion" eventKey="0">
                    <ListGroup variant="flush">
                        {events
                            .sort((a, b) => {
                                const aTime = moment(a.startTime, 'H:m');
                                const bTime = moment(b.startTime, 'H:m');

                                if (aTime.isBefore(bTime)) {
                                    return -1;
                                }
                                if (aTime.isAfter(bTime)) {
                                    return 1;
                                }
                                return 0;
                            })
                            .map(event => (<EventAttendance key={event.uuid} event={event} />))}
                    </ListGroup>
                </Accordion.Collapse>
            </Accordion>
        </Card.Body>
    </Card>

);

OpenHouseAttendance.propTypes = {
    openHouse: PropTypes.shape({
        name: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
        visible: PropTypes.bool.isRequired,
        date: PropTypes.number.isRequired,
        attendees: PropTypes.number.isRequired,
    }).isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            uuid: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            area: PropTypes.string.isRequired,
            building: PropTypes.string.isRequired,
            openHouse: PropTypes.string.isRequired,
            startTime: PropTypes.string.isRequired,
            endTime: PropTypes.string.isRequired,
            room: PropTypes.string.isRequired,
            attendees: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default OpenHouseAttendance;
