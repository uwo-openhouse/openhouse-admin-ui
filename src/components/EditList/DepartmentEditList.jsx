import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { MODAL_TYPES } from '../../service';
import EditList from './EditList';
import DepartmentEditListElement from './DepartmentEditListElement';
import CenteredModal from '../CenteredModal';
import { getNewDepartment } from '../../service/departments';
import DepartmentEditForm from '../../containers/Department/DepartmentEditForm';
import DepartmentCreateForm from '../../containers/Department/DepartmentCreateForm';
import DepartmentDeleteForm from '../../containers/Department/DepartmentDeleteForm';

const DepartmentEditList = ({ departments }) => {
    const [activeModal, setActiveModal] = useState(MODAL_TYPES.none);
    const [selectedID, setSelectedID] = useState(null);
    const closeModal = () => setActiveModal(MODAL_TYPES.none);

    return (
        <>
            <EditList
                elements={departments}
                ElementComponentType={DepartmentEditListElement}
                deleteVisible
                editVisible
                onEdit={(id) => {
                    setSelectedID(id);
                    setActiveModal(MODAL_TYPES.edit);
                }}
                onDelete={(id) => {
                    setSelectedID(id);
                    setActiveModal(MODAL_TYPES.delete);
                }}
                onNew={() => setActiveModal(MODAL_TYPES.new)}
            />
            <CenteredModal
                onClose={closeModal}
                title="Edit Department"
                isVisible={activeModal === MODAL_TYPES.edit}
            >
                <DepartmentEditForm id={selectedID} onClose={closeModal} />
            </CenteredModal>
            <CenteredModal
                onClose={closeModal}
                title="Create Department"
                isVisible={activeModal === MODAL_TYPES.new}
            >
                <DepartmentCreateForm id={selectedID} onClose={closeModal} department={getNewDepartment()} />
            </CenteredModal>
            <CenteredModal
                onClose={closeModal}
                title="Delete Department"
                isVisible={activeModal === MODAL_TYPES.delete}
            >
                <DepartmentDeleteForm id={selectedID} onClose={closeModal} />
            </CenteredModal>
        </>
    );
};

DepartmentEditList.propTypes = {
    departments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default DepartmentEditList;
