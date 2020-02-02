import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import FormTimePicker from '../Form/FormTimePicker';
import FormOptionSelector from '../Form/FormOptionSelector';


const EateryEditForm = ({
    onClose, onSave, eatery, locations,
}) => {
    const [name, setName] = useState(eatery.name);
    const [building, setBuilding] = useState(eatery.building);
    const [openTime, setOpenTime] = useState(eatery.openTime);
    const [closeTime, setCloseTime] = useState(eatery.closeTime);
    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="name" defaultValue={name} onChange={changeEvent => setName(changeEvent.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Open Time</Form.Label>
                <FormTimePicker onChange={setOpenTime} value={openTime} maxDetail="minute" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Close Time</Form.Label>
                <FormTimePicker minTime={openTime} onChange={setCloseTime} value={closeTime} maxDetail="minute" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Building</Form.Label>
                <FormOptionSelector placeHolder="Select Building" value={building} onChange={setBuilding} options={locations} />
            </Form.Group>
            <Button
                variant="primary"
                onClick={() => {
                    onSave({
                        ...eatery, name, building, openTime, closeTime,
                    }).then(() => onClose());
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
