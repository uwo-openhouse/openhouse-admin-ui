import React, { useState } from 'react';
import LocationPicker from 'react-location-picker';
import * as PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import FormValidationError from '../Form/FormValidationError';
import { validateLocation } from '../../service/locations';
import { isValid } from '../../service';

const LocationEditForm = ({ onClose, onSave, location }) => {
    const [name, setName] = useState(location.name);
    const [position, setPosition] = useState(location.position);
    const [address, setAddress] = useState(' ');
    const [validationErrors, setValidationErrors] = useState(undefined);

    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="name" defaultValue={name} onChange={event => setName(event.target.value)} />
                <FormValidationError attribute="name" validation={validationErrors} />
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
                <FormValidationError attribute="position.lat" validation={validationErrors} />
                <FormValidationError attribute="position.lng" validation={validationErrors} />
            </Form.Group>
            <Button
                variant="primary"
                onClick={() => {
                    const newLocation = { ...location, name, position };
                    const errors = validateLocation(location);
                    if (isValid(errors)) {
                        onSave(newLocation).then(() => onClose());
                    } else {
                        setValidationErrors(errors);
                    }
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
