import { Badge, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import * as PropTypes from 'prop-types';


const DeleteForm = ({
    onDelete, onClose, name, id,
}) => {
    const [enteredName, setEnteredName] = useState('');
    return (
        <Form>
            <Form.Label>
Are you sure you wish to delete
                {' '}
                <b>{name}</b>
?
            </Form.Label>
            <Form.Group>
                <Form.Label>
Please enter
                    {' '}
                    <Badge variant="danger">
                        <b>{name}</b>
                    </Badge>
                    {' '}
to confirm
                </Form.Label>
                <Form.Control placeholder="name" defaultValue={enteredName} onChange={event => setEnteredName(event.target.value)} />
            </Form.Group>
            <Button
                variant="danger"
                disabled={enteredName !== name}
                onClick={() => {
                    onDelete(id);
                    onClose();
                }}
            >
Delete
            </Button>
        </Form>
    );
};

DeleteForm.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default DeleteForm;
