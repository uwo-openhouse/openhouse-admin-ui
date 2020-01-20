import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import EditList from '../EditList/EditList';
import OpenHouseEditListElement from './OpenHouseEditListElement';
import CenteredModal from '../CenteredModal';
import { MODAL_TYPES } from '../../service';
import OpenHouseEditForm from '../../containers/Open House/OpenHouseEditForm';
import { getNewOpenHouse } from '../../service/openHouses';
import OpenHouseCreateForm from '../../containers/Open House/OpenHouseCreateForm';
import OpenHouseDeleteForm from '../../containers/Open House/OpenHouseDeleteForm';

const OpenHouseEditList = ({ openHouses }) => {
    const [activeModal, setActiveModal] = useState(MODAL_TYPES.none);
    const [selectedID, setSelectedID] = useState(null);
    const closeModal = () => setActiveModal(MODAL_TYPES.none);

    return (
        <>
            <EditList
                elements={openHouses}
                ElementComponentType={OpenHouseEditListElement}
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
                title="Edit OpenHouse"
                isVisible={activeModal === MODAL_TYPES.edit}
            >
                <OpenHouseEditForm id={selectedID} onClose={closeModal} />
            </CenteredModal>
            <CenteredModal
                onClose={closeModal}
                title="Create OpenHouse"
                isVisible={activeModal === MODAL_TYPES.new}
            >
                <OpenHouseCreateForm id={selectedID} onClose={closeModal} openHouse={getNewOpenHouse()} />
            </CenteredModal>
            <CenteredModal
                onClose={closeModal}
                title="Delete OpenHouse"
                isVisible={activeModal === MODAL_TYPES.delete}
            >
                <OpenHouseDeleteForm id={selectedID} onClose={closeModal} />
            </CenteredModal>
        </>
    );
};

OpenHouseEditList.propTypes = {
    openHouses: PropTypes.arrayOf(
        PropTypes.shape({
            uuid: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            info: PropTypes.string.isRequired,
            visible: PropTypes.bool.isRequired,
            date: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default OpenHouseEditList;
