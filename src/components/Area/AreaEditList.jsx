import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { MODAL_TYPES } from '../../service';
import EditList from '../EditList/EditList';
import AreaEditListElement from './AreaEditListElement';
import CenteredModal from '../CenteredModal';
import { getNewArea } from '../../service/areas';
import AreaEditForm from '../../containers/Area/AreaEditForm';
import AreaCreateForm from '../../containers/Area/AreaCreateForm';
import AreaDeleteForm from '../../containers/Area/AreaDeleteForm';

const AreaEditList = ({ areas, onDelete }) => {
    const [activeModal, setActiveModal] = useState(MODAL_TYPES.none);
    const [selectedID, setSelectedID] = useState(null);
    const closeModal = () => setActiveModal(MODAL_TYPES.none);

    return (
        <>
            <EditList
                elements={areas}
                ElementComponentType={AreaEditListElement}
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
                onDeleteAction={onDelete}
                name="Areas"
            />
            <CenteredModal
                onClose={closeModal}
                title="Edit Area"
                isVisible={activeModal === MODAL_TYPES.edit}
            >
                <AreaEditForm id={selectedID} onClose={closeModal} />
            </CenteredModal>
            <CenteredModal
                onClose={closeModal}
                title="Create Area"
                isVisible={activeModal === MODAL_TYPES.new}
            >
                <AreaCreateForm id={selectedID} onClose={closeModal} area={getNewArea()} />
            </CenteredModal>
            <CenteredModal
                onClose={closeModal}
                title="Delete Area"
                isVisible={activeModal === MODAL_TYPES.delete}
            >
                <AreaDeleteForm id={selectedID} onClose={closeModal} />
            </CenteredModal>
        </>
    );
};

AreaEditList.propTypes = {
    areas: PropTypes.arrayOf(
        PropTypes.shape({
            uuid: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default AreaEditList;
