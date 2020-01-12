import React, { useState } from 'react';
import LocationPicker from 'react-location-picker';
import * as PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

const LocationEditForm = ({ onClose, onSave, location }) => {
    const [name, setName] = useState(location.name);
    const [position, setPosition] = useState(location.position);
    const [address, setAddress] = useState(' ');

    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="name" defaultValue={name} onChange={event => setName(event.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Position</Form.Label>
                <Form.Text>{address}</Form.Text>
                <LocationPicker
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '400px' }} />}
                    defaultPosition={position}
                    onChange={({ position: newPosition, address: newAddress }) => {
                        setPosition(newPosition);
                        setAddress(newAddress);
                    }}
                    radius={-1}
                    zoom={15}
                />
            </Form.Group>
            <Button
                variant="primary"
                onClick={() => {
                    onSave({ ...location, name, position }).then(() => onClose());
                }}
            >
                Submit
            </Button>
        </Form>
    );
};


LocationEditForm.propTypes = {
    location: PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};


export default LocationEditForm;
