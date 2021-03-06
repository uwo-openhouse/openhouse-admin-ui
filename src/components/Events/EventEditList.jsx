import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import {
    Col,
    Container, Form, Row, Tab, Tabs,
} from 'react-bootstrap';
import isSubset from 'is-subset';
import { MODAL_TYPES } from '../../service';
import EditList from '../EditList/EditList';
import CenteredModal from '../CenteredModal';
import EventEditListElement from '../../containers/Events/EventEditListElement';
import EventEditForm from '../../containers/Events/EventEditForm';
import EventDeleteForm from '../../containers/Events/EventDeleteForm';
import { getNewEvent } from '../../service/events';
import EventCreateForm from '../../containers/Events/EventCreateForm';
import EventImportForm from '../../containers/Events/EventImportForm';

const EventEditList = ({
    events, openHouses, areas, onDelete,
}) => {
    const [activeModal, setActiveModal] = useState(MODAL_TYPES.none);
    const [selectedID, setSelectedID] = useState(null);
    const [filter, setFilter] = useState({});
    const closeModal = () => setActiveModal(MODAL_TYPES.none);

    const updateFilter = (filterKey, value) => setFilter([...Object
        .keys(filter), filterKey]
        .reduce((result, key) => {
            const nextResult = { ...result };
            if (key === filterKey) {
                if (value !== '') {
                    nextResult[key] = value;
                }
            } else {
                nextResult[key] = filter[key];
            }
            return nextResult;
        }, {}));

    return (
        <>
            <Container>


                <Form>
                    <Form.Label>Filter</Form.Label>
                    <Row>
                        <Col xs={{ span: 12, order: 0 }} md={{ span: 6, order: 0 }}>
                            <Form.Label>Open House</Form.Label>
                        </Col>
                        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                            <Form.Label>Area</Form.Label>
                        </Col>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                            <Form.Control
                                defaultValue=""
                                value={filter.openHouse}
                                as="select"
                                onChange={(changeEvent => updateFilter('openHouse', changeEvent.target.value))}
                            >
                                <option value="">All</option>
                                {openHouses.map(openHouse => (
                                    <option key={openHouse.uuid} value={openHouse.uuid}>{openHouse.name}</option>
                                ))}
                            </Form.Control>
                        </Col>
                        <Col xs={{ span: 12, order: 3 }} md={{ span: 6, order: 3 }}>
                            <Form.Control
                                defaultValue=""
                                value={filter.area}
                                as="select"
                                onChange={(changeEvent => updateFilter('area', changeEvent.target.value))}
                            >
                                <option value="">All</option>
                                {areas.map(area => (
                                    <option key={area.uuid} value={area.uuid}>{area.name}</option>
                                ))}
                            </Form.Control>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <EditList
                elements={events.filter(event => isSubset(event, filter))}
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
                onDeleteAction={onDelete}
                name="Events"
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
            uuid: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            area: PropTypes.string.isRequired,
            building: PropTypes.string.isRequired,
            openHouse: PropTypes.string.isRequired,
            startTime: PropTypes.string.isRequired,
            endTime: PropTypes.string.isRequired,
            room: PropTypes.string.isRequired,
        }),
    ).isRequired,
    openHouses: PropTypes.arrayOf(
        PropTypes.shape({
            uuid: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
    areas: PropTypes.arrayOf(
        PropTypes.shape({
            uuid: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default EventEditList;
