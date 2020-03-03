
import React from 'react';
import {
    Button, Card, Form,
} from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './EditListElement.scss';


const EditListElement = ({
    children, id, editVisible, deleteVisible, onEdit, onDelete, displayCheckBox, isChecked, onCheck,
}) => (
    <Card className="edit-list-element">
        <Card.Body>
            {children}
            {(editVisible && !displayCheckBox) && (
                <Button
                    className="edit-button"
                    variant="primary"
                    onClick={() => onEdit(id)}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
            )}
            {(deleteVisible && !displayCheckBox) && (
                <Button
                    className="delete-button"
                    variant="danger"
                    onClick={() => onDelete(id)}
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            )}
            {displayCheckBox && (
                <Form>
                    <Form.Check type="checkbox" checked={isChecked} onChange={() => onCheck(id)} />
                </Form>
            )}

        </Card.Body>
    </Card>
);

EditListElement.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    id: PropTypes.string.isRequired,
    editVisible: PropTypes.bool.isRequired,
    deleteVisible: PropTypes.bool.isRequired,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    displayCheckBox: PropTypes.bool.isRequired,
    isChecked: PropTypes.bool.isRequired,
    onCheck: PropTypes.func.isRequired,
};

EditListElement.defaultProps = {
    onEdit: null,
    onDelete: null,
};

export default EditListElement;
