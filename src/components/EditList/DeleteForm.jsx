import { Badge, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import LoadingButton from '../LoadingButton';


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
            <LoadingButton
                buttonProps={{
                    variant: 'danger',
                }}
                disabled={enteredName !== name}
                onClick={() => onDelete(id)}
                onSuccess={onClose}
            >
Delete
            </LoadingButton>
        </Form>
    );
};

DeleteForm.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
};

DeleteForm.defaultProps = {
    name: '',
};

export default DeleteForm;
