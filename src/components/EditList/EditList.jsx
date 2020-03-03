import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import EditListElement from './EditListElement';
import './EditList.scss';
import CenteredModal from '../CenteredModal';
import DeleteGroupForm from './DeleteGroupForm';

const EditList = ({
    ElementComponentType, elements, deleteVisible, editVisible, onEdit, onDelete, onNew, onDeleteAction, name,
}) => {
    const [isSelecting, setIsSelecting] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);
    const [isModalActive, setIsModalActive] = useState(false);

    const onCheck = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(a => a !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const onDeleteAll = () => Promise.all(selectedIds.map(selectedId => onDeleteAction(selectedId))).then(() => {
        setSelectedIds([]);
        setIsSelecting(false);
    });
    const modalClose = () => setIsModalActive(false);

    return (
        <Container>
            {!isSelecting && (
                <>
                    <Button className="button" variant="primary" onClick={onNew}><FontAwesomeIcon icon={faPlus} /></Button>
                    <Button
                        className="button"
                        variant="primary"
                        onClick={() => setIsSelecting(true)}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                </>

            )}
            {isSelecting && (
                <>
                    <Button
                        className="button"
                        variant="danger"
                        disabled={selectedIds.length === 0}
                        onClick={() => setIsModalActive(true)}
                    >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                    <Button
                        className="button"
                        variant="primary"
                        onClick={() => setIsSelecting(false)}
                    >
                        Cancel
                    </Button>
                </>

            )}
            {elements.map(element => (
                <EditListElement
                    key={element.uuid}
                    id={element.uuid}
                    deleteVisible={deleteVisible}
                    editVisible={editVisible}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    displayCheckBox={isSelecting}
                    isChecked={selectedIds.includes(element.uuid)}
                    onCheck={onCheck}
                >
                    <ElementComponentType {...element} />
                </EditListElement>
            ))}
            <CenteredModal
                onClose={modalClose}
                title={`Delete ${name}`}
                isVisible={isModalActive}
            >
                <DeleteGroupForm name={name} count={selectedIds.length} onClose={modalClose} onDelete={onDeleteAll} />
            </CenteredModal>

        </Container>
    );
};

EditList.propTypes = {
    ElementComponentType: PropTypes.elementType.isRequired,
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            uuid: PropTypes.string.isRequired,
        }),
    ).isRequired,
    deleteVisible: PropTypes.bool.isRequired,
    editVisible: PropTypes.bool.isRequired,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onNew: PropTypes.func,
    onDeleteAction: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

EditList.defaultProps = {
    onEdit: null,
    onDelete: null,
    onNew: null,
};

export default EditList;
