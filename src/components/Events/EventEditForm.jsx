import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import FormOptionSelector from '../Form/FormOptionSelector';
import FormTimePicker from '../Form/FormTimePicker';
import FormValidationError from '../Form/FormValidationError';
import { validateEvent } from '../../service/events';
import { isValid } from '../../service';
import LoadingButton from '../LoadingButton';

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
    const [validationErrors, setValidationErrors] = useState(undefined);

    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="name" defaultValue={name} onChange={changeEvent => setName(changeEvent.target.value)} />
                <FormValidationError attribute="name" validation={validationErrors} />
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
                <FormValidationError attribute="description" validation={validationErrors} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Start Time</Form.Label>
                <FormTimePicker onChange={setStartTime} value={startTime} maxDetail="minute" />
                <FormValidationError attribute="startTime" validation={validationErrors} />
            </Form.Group>
            <Form.Group>
                <Form.Label>End Time</Form.Label>
                <FormTimePicker minTime={startTime} onChange={setEndTime} value={endTime} maxDetail="minute" />
                <FormValidationError attribute="endTime" validation={validationErrors} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Area</Form.Label>
                <FormOptionSelector placeHolder="Select Area" value={area} onChange={setArea} options={areas} />
                <FormValidationError attribute="area" validation={validationErrors} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Building</Form.Label>
                <FormOptionSelector placeHolder="Select Building" value={building} onChange={setBuilding} options={locations} />
                <FormValidationError attribute="building" validation={validationErrors} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Room</Form.Label>
                <Form.Control placeholder="room" defaultValue={room} onChange={changeEvent => setRoom(changeEvent.target.value)} />
                <FormValidationError attribute="room" validation={validationErrors} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Open House</Form.Label>
                <FormOptionSelector placeHolder="Select OpenHouse" value={openHouse} onChange={setOpenHouse} options={openHouses} />
                <FormValidationError attribute="openHouse" validation={validationErrors} />
            </Form.Group>
            <LoadingButton
                buttonProps={{
                    variant: 'primary',
                }}
                onSuccess={() => onClose()}
                onClick={() => {
                    const newEvent = {
                        ...event, name, description, area, building, openHouse, startTime, endTime, room,
                    };
                    const errors = validateEvent(newEvent, locations, areas, openHouses);
                    if (isValid(errors)) {
                        return onSave(newEvent);
                    }
                    setValidationErrors(errors);
                    return Promise.reject();
                }}
            >
                Submit
            </LoadingButton>
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
