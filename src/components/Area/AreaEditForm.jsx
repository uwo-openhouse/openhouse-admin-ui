import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { SketchPicker } from 'react-color';
import * as PropTypes from 'prop-types';
import FormValidationError from '../Form/FormValidationError';
import { validateArea } from '../../service/areas';
import { isValid } from '../../service';


const AreaEditForm = ({ onClose, onSave, area }) => {
    const [name, setName] = useState(area.name);
    const [color, setColor] = useState(area.color);
    const [validationErrors, setValidationErrors] = useState(undefined);

    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="name" defaultValue={name} onChange={event => setName(event.target.value)} />
                <FormValidationError attribute="name" validation={validationErrors} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Color</Form.Label>
                <SketchPicker
                    color={color}
                    onChangeComplete={newColor => setColor(newColor.hex)}
                    disableAlpha
                />
                <FormValidationError attribute="color" validation={validationErrors} />
            </Form.Group>
            <Button
                variant="primary"
                onClick={() => {
                    const newArea = { ...area, name, color };
                    const errors = validateArea(newArea);
                    if (isValid(errors)) {
                        onSave(newArea).then(() => onClose());
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

AreaEditForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    area: PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired,
};

export default AreaEditForm;
