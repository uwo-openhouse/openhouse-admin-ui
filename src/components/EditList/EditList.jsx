import React from 'react';
import { Button, Container } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import EditListElement from './EditListElement';
import './EditList.scss';

const EditList = ({
    ElementComponentType, elements, deleteVisible, editVisible, onEdit, onDelete, onNew,
}) => (

    <Container>
        <Button className="new-button" variant="primary" onClick={onNew}><FontAwesomeIcon icon={faPlus} /></Button>
        {elements.map(element => (
            <EditListElement
                key={element.id}
                id={element.id}
                deleteVisible={deleteVisible}
                editVisible={editVisible}
                onEdit={onEdit}
                onDelete={onDelete}
            >
                <ElementComponentType {...element} />
            </EditListElement>
        ))}
    </Container>
);

EditList.propTypes = {
    ElementComponentType: PropTypes.elementType.isRequired,
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ).isRequired,
    deleteVisible: PropTypes.bool.isRequired,
    editVisible: PropTypes.bool.isRequired,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onNew: PropTypes.func,
};

EditList.defaultProps = {
    onEdit: null,
    onDelete: null,
    onNew: null,
};

export default EditList;
