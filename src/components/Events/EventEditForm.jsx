import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import FormOptionSelector from '../Form/FormOptionSelector';
import FormTimePicker from '../Form/FormTimePicker';

const EventEditForm = ({
    onClose, onSave, event, openHouses, locations, areas,
}) => {
    const [name, setName] = useState(event.name);
    const [description, setDescription] = useState(event.description);
    const [area, setArea] = useState(event.area);
    const [building, setBuilding] = useState(event.building);
    const [openHouse, setOpenHouse] = useState(event.openHouse);
    const [startTime, setStartTime] = useState(event.startTime);
    const [endTime, setEndTime] = useState(event.endTime);
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
                <Form.Label>Start Time</Form.Label>
                <FormTimePicker onChange={setStartTime} value={startTime} maxDetail="minute" />
            </Form.Group>
            <Form.Group>
                <Form.Label>End Time</Form.Label>
                <FormTimePicker minTime={startTime} onChange={setEndTime} value={endTime} maxDetail="minute" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Area</Form.Label>
                <FormOptionSelector placeHolder="Select Area" value={area} onChange={setArea} options={areas} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Building</Form.Label>
                <FormOptionSelector placeHolder="Select Building" value={building} onChange={setBuilding} options={locations} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Room</Form.Label>
                <Form.Control placeholder="room" defaultValue={room} onChange={changeEvent => setRoom(changeEvent.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Open House</Form.Label>
                <FormOptionSelector placeHolder="Select OpenHouse" value={openHouse} onChange={setOpenHouse} options={openHouses} />
            </Form.Group>
            <Button
                variant="primary"
                onClick={() => {
                    onSave({
                        ...event, name, description, area, building, openHouse, startTime, endTime, room,
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
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
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
