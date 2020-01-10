import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import * as PropTypes from 'prop-types';

const createOptions = options => options.map(({ id, name }) => (
    <option key={id} value={id}>
        {name}
    </option>
));

const EventEditForm = ({
    onClose, onSave, event, openHouses, locations, departments,
}) => {
    const [name, setName] = useState(event.name);
    const [description, setDescription] = useState(event.description);
    const [department, setDepartment] = useState(event.department);
    const [building, setBuilding] = useState(event.building);
    const [openHouse, setOpenHouse] = useState(event.openHouse);

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
                <Form.Label>Department</Form.Label>
                <Form.Control
                    defaultValue={department}
                    placeholder="Select Department"
                    as="select"
                    onChange={(changeEvent => setDepartment(changeEvent.target.value))}
                >
                    <option disabled value="">Select Department</option>
                    {createOptions(departments)}
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
                <Form.Label>Open House</Form.Label>
                <Form.Control
                    defaultValue={building}
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
                        ...event, name, description, department, building, openHouse,
                    });
                    onClose();
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
        department: PropTypes.string.isRequired,
        building: PropTypes.string.isRequired,
        openHouse: PropTypes.string.isRequired,
    }).isRequired,
    departments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    locations: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    openHouses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};

export default EventEditForm;
