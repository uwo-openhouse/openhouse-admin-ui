import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Tab, Tabs } from 'react-bootstrap';
import { MODAL_TYPES } from '../../service';
import EditList from '../EditList/EditList';
import CenteredModal from '../CenteredModal';
import EventEditListElement from '../../containers/Events/EventEditListElement';
import EventEditForm from '../../containers/Events/EventEditForm';
import EventDeleteForm from '../../containers/Events/EventDeleteForm';
import { getNewEvent } from '../../service/events';
import EventCreateForm from '../../containers/Events/EventCreateForm';
import EventImportForm from '../../containers/Events/EventImportForm';

const EventEditList = ({ events }) => {
    const [activeModal, setActiveModal] = useState(MODAL_TYPES.none);
    const [selectedID, setSelectedID] = useState(null);
    const closeModal = () => setActiveModal(MODAL_TYPES.none);

    return (
        <>
            <EditList
                elements={events}
                ElementComponentType={EventEditListElement}
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
                title="Edit Event"
                isVisible={activeModal === MODAL_TYPES.edit}
            >
                <EventEditForm id={selectedID} onClose={closeModal} />
            </CenteredModal>
            <CenteredModal
                onClose={closeModal}
                title="Create Event"
                isVisible={activeModal === MODAL_TYPES.new}
            >
                <Tabs id="create-event-tabs" defaultActiveKey="import">
                    <Tab eventKey="import" title="Import">
                        <EventImportForm id={selectedID} onClose={closeModal} event={getNewEvent()} />
                    </Tab>
                    <Tab eventKey="create" title="Create">
                        <EventCreateForm id={selectedID} onClose={closeModal} event={getNewEvent()} />
                    </Tab>
                </Tabs>
            </CenteredModal>
            <CenteredModal
                onClose={closeModal}
                title="Delete Event"
                isVisible={activeModal === MODAL_TYPES.delete}
            >
                <EventDeleteForm id={selectedID} onClose={closeModal} />
            </CenteredModal>
        </>
    );
};

EventEditList.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            department: PropTypes.string.isRequired,
            building: PropTypes.string.isRequired,
            openHouse: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default EventEditList;
