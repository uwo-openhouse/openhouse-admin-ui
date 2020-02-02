import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import FormTimePicker from '../Form/FormTimePicker';
import FormOptionSelector from '../Form/FormOptionSelector';
import FormValidationError from '../Form/FormValidationError';
import { validateEatery } from '../../service/eateries';
import { isValid } from '../../service';


const EateryEditForm = ({
    onClose, onSave, eatery, locations,
}) => {
    const [name, setName] = useState(eatery.name);
    const [building, setBuilding] = useState(eatery.building);
    const [openTime, setOpenTime] = useState(eatery.openTime);
    const [closeTime, setCloseTime] = useState(eatery.closeTime);
    const [validationErrors, setValidationErrors] = useState(undefined);

    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="name" defaultValue={name} onChange={changeEvent => setName(changeEvent.target.value)} />
                <FormValidationError attribute="name" validation={validationErrors} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Open Time</Form.Label>
                <FormTimePicker onChange={setOpenTime} value={openTime} maxDetail="minute" />
                <FormValidationError attribute="openTime" validation={validationErrors} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Close Time</Form.Label>
                <FormTimePicker minTime={openTime} onChange={setCloseTime} value={closeTime} maxDetail="minute" />
                <FormValidationError attribute="closeTime" validation={validationErrors} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Building</Form.Label>
                <FormOptionSelector placeHolder="Select Building" value={building} onChange={setBuilding} options={locations} />
                <FormValidationError attribute="building" validation={validationErrors} />
            </Form.Group>
            <Button
                variant="primary"
                onClick={() => {
                    const newEatery = {
                        ...eatery, name, building, openTime, closeTime,
                    };
                    const errors = validateEatery(newEatery, locations);
                    if (isValid(errors)) {
                        onSave(newEatery).then(() => onClose());
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

EateryEditForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    eatery: PropTypes.shape({
        name: PropTypes.string.isRequired,
        building: PropTypes.string.isRequired,
        openTime: PropTypes.string.isRequired,
        closeTime: PropTypes.string.isRequired,
    }).isRequired,
    locations: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};

export default EateryEditForm;
