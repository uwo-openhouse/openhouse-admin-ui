import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import TimePicker from 'react-time-picker';
import './EventEditForm.scss';

const createOptions = options => options.map(({ uuid, name }) => (
    <option key={uuid} value={uuid}>
        {name}
    </option>
));

const EventEditForm = ({
    onClose, onSave, event, openHouses, locations, areas,
}) => {
    const [name, setName] = useState(event.name);
    const [description, setDescription] = useState(event.description);
    const [area, setArea] = useState(event.area);
    const [building, setBuilding] = useState(event.building);
    const [openHouse, setOpenHouse] = useState(event.openHouse);
    const [time, setTime] = useState(event.time);
    const [room, setRoom] = useState(event.room);

    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="name" defaultValue={name} onChange={changeEvent => setName(changeEvent.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="description"
                    defaultValue={description}
                    onChange={changeEvent => setDescription(changeEvent.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Time</Form.Label>
                <TimePicker onChange={setTime} value={time} maxDetail="minute" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Area</Form.Label>
                <Form.Control
                    defaultValue={area}
                    placeholder="Select Area"
                    as="select"
                    onChange={(changeEvent => setArea(changeEvent.target.value))}
                >
                    <option disabled value="">Select Area</option>
                    {createOptions(areas)}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Building</Form.Label>
                <Form.Control
                    defaultValue={building}
                    placeholder="Select Building"
                    as="select"
                    onChange={(changeEvent => setBuilding(changeEvent.target.value))}
                >
                    <option disabled value="">Select Building</option>
                    {createOptions(locations)}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Room</Form.Label>
                <Form.Control placeholder="room" defaultValue={room} onChange={changeEvent => setRoom(changeEvent.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Open House</Form.Label>
                <Form.Control
                    defaultValue={openHouse}
                    placeholder="Select OpenHouse"
                    as="select"
                    onChange={(changeEvent => setOpenHouse(changeEvent.target.value))}
                >
                    <option disabled value="">Select Open House</option>
                    {createOptions(openHouses)}
                </Form.Control>
            </Form.Group>
            <Button
                variant="primary"
                onClick={() => {
                    onSave({
                        ...event, name, description, area, building, openHouse, time, room,
                    }).then(() => onClose());
                }}
            >
                Submit
            </Button>
        </Form>
    );
};

EventEditForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    event: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        building: PropTypes.string.isRequired,
        openHouse: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        room: PropTypes.string.isRequired,
    }).isRequired,
    areas: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    locations: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    openHouses: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};

export default EventEditForm;
