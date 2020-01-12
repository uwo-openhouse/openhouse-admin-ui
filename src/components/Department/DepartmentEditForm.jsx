import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { SketchPicker } from 'react-color';
import * as PropTypes from 'prop-types';


const DepartmentEditForm = ({ onClose, onSave, department }) => {
    const [name, setName] = useState(department.name);
    const [color, setColor] = useState(department.color);

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
                    onSave({ ...department, name, color }).then(() => onClose());
                }}
            >
                Submit
            </Button>
        </Form>
    );
};

DepartmentEditForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    department: PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired,
};

export default DepartmentEditForm;
