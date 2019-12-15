
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './EditListElement.scss';


const EditListElement = ({
    children, id, editVisible, deleteVisible, onEdit, onDelete,
}) => (
    <Card className="edit-list-element">
        <Card.Body>
            {children}
            {editVisible && (
                <Button
                    className="edit-button"
                    variant="primary"
                    onClick={() => onEdit(id)}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
            )}
            {deleteVisible && (
                <Button
                    className="delete-button"
                    variant="danger"
                    onClick={() => onDelete(id)}
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
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
};

EditListElement.defaultProps = {
    onEdit: null,
    onDelete: null,
};

export default EditListElement;
