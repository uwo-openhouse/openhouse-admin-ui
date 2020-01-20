import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import EditList from '../EditList/EditList';
import LocationEditListElement from './LocationEditListElement';
import CenteredModal from '../CenteredModal';
import LocationEditForm from '../../containers/Location/LocationEditForm';
import LocationCreateForm from '../../containers/Location/LocationCreateForm';
import { getNewLocation } from '../../service/locations';
import LocationDeleteForm from '../../containers/Location/LocationDeleteForm';
import { MODAL_TYPES } from '../../service';

const LocationEditList = ({ locations }) => {
    const [activeModal, setActiveModal] = useState(MODAL_TYPES.none);
    const [selectedID, setSelectedID] = useState(null);
    const closeModal = () => setActiveModal(MODAL_TYPES.none);

    return (
        <>
            <EditList
                elements={locations}
                ElementComponentType={LocationEditListElement}
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
                title="Edit Location"
                isVisible={activeModal === MODAL_TYPES.edit}
            >
                <LocationEditForm id={selectedID} onClose={closeModal} />
            </CenteredModal>
            <CenteredModal
                onClose={closeModal}
                title="Create Location"
                isVisible={activeModal === MODAL_TYPES.new}
            >
                <LocationCreateForm id={selectedID} onClose={closeModal} location={getNewLocation()} />
            </CenteredModal>
            <CenteredModal
                onClose={closeModal}
                title="Delete Location"
                isVisible={activeModal === MODAL_TYPES.delete}
            >
                <LocationDeleteForm id={selectedID} onClose={closeModal} />
            </CenteredModal>
        </>
    );
};

LocationEditList.propTypes = {
    locations: PropTypes.arrayOf(
        PropTypes.shape({
            uuid: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default LocationEditList;
