import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { SketchPicker } from 'react-color';
import * as PropTypes from 'prop-types';


const AreaEditForm = ({ onClose, onSave, area }) => {
    const [name, setName] = useState(area.name);
    const [color, setColor] = useState(area.color);

    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="name" defaultValue={name} onChange={event => setName(event.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Color</Form.Label>
                <SketchPicker
                    color={color}
                    onChangeComplete={newColor => setColor(newColor.hex)}
                    disableAlpha
                />
            </Form.Group>
            <Button
                variant="primary"
                onClick={() => {
                    onSave({ ...area, name, color }).then(() => onClose());
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
