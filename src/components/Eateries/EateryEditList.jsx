import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { MODAL_TYPES } from '../../service';
import EditList from '../EditList/EditList';
import CenteredModal from '../CenteredModal';
import EateryEditListElement from '../../containers/Eateries/EateryEditListElement';
import EateryDeleteForm from '../../containers/Eateries/EateryDeleteForm';
import EateryEditForm from '../../containers/Eateries/EateryEditForm';
import EateryCreateForm from '../../containers/Eateries/EateryCreateForm';
import { getNewEatery } from '../../service/eateries';

const EateryEditList = ({ eateries }) => {
    const [activeModal, setActiveModal] = useState(MODAL_TYPES.none);
    const [selectedID, setSelectedID] = useState(null);
    const closeModal = () => setActiveModal(MODAL_TYPES.none);

    return (
        <>
            <EditList
                elements={eateries}
                ElementComponentType={EateryEditListElement}
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
                title="Edit Eatery"
                isVisible={activeModal === MODAL_TYPES.edit}
            >
                <EateryEditForm id={selectedID} onClose={closeModal} />
            </CenteredModal>
            <CenteredModal
                onClose={closeModal}
                title="Create Eatery"
                isVisible={activeModal === MODAL_TYPES.new}
            >
                <EateryCreateForm id={selectedID} onClose={closeModal} eatery={getNewEatery()} />
            </CenteredModal>
            <CenteredModal
                onClose={closeModal}
                title="Delete Eatery"
                isVisible={activeModal === MODAL_TYPES.delete}
            >
                <EateryDeleteForm id={selectedID} onClose={closeModal} />
            </CenteredModal>
        </>
    );
};

EateryEditList.propTypes = {
    eateries: PropTypes.arrayOf(
        PropTypes.shape({
            uuid: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            building: PropTypes.string.isRequired,
            openTime: PropTypes.string.isRequired,
            closeTime: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default EateryEditList;
