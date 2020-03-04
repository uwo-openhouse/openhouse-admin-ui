import { Badge, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import LoadingButton from '../LoadingButton';


const DeleteGroupForm = ({
    onDelete, onClose, name, count,
}) => {
    const [enteredName, setEnteredName] = useState('');
    return (
        <Form>
            <Form.Label>
                Are you sure you wish to delete
                {' '}
                <b>{`${count} ${name}`}</b>
                ?
            </Form.Label>
            <Form.Group>
                <Form.Label>
                    Please enter
                    {' '}
                    <Badge variant="danger">
                        <b>DELETE</b>
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
                disabled={enteredName !== 'DELETE'}
                onClick={onDelete}
                onSuccess={onClose}
            >
                Delete
            </LoadingButton>
        </Form>
    );
};

DeleteGroupForm.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
};

export default DeleteGroupForm;
