import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import CSVReader from 'react-csv-reader';
import camelcase from 'camelcase';
import { csvImportToEvents, validateEventCSV } from '../../service/events';
import { isValid } from '../../service';
import EventValidationRow from './EventValidationRow';
import './EventImportForm.scss';
import LoadingButton from '../LoadingButton';

const papaparseOptions = {
    header: true,
    skipEmptyLines: true,
    transformHeader: header => camelcase(header),
};

const EventImportForm = ({
    onClose, onSave, locations, areas, openHouses,
}) => {
    const [events, setEvents] = useState([]);
    const locationNames = locations.map(location => location.name);
    const areaNames = areas.map(area => area.name);
    const openHouseNames = openHouses.map(openHouse => openHouse.name);

    const validation = validateEventCSV(events, locationNames, areaNames, openHouseNames);
    const hasEvents = events.length > 0;
    if (hasEvents) {
        return (
            <Form>
                <h6 className="review-prompt">Please Review</h6>
                <Table className="table-fixed">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Area</th>
                            <th>Building</th>
                            <th>Room</th>
                            <th>Open House</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, i) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <EventValidationRow key={i} id={i} event={event} validation={validation[i]} />
                        ))}
                    </tbody>
                </Table>
                <LoadingButton
                    buttonProps={{
                        className: 'submit-button',
                        variant: 'primary',
                    }}
                    disabled={validation.some(validationError => (!isValid(validationError)))}
                    onClick={() => onSave(csvImportToEvents(events, locations, areas, openHouses))}
                    onSuccess={() => onClose()}
                >
                    Submit
                </LoadingButton>
                <Button
                    variant="primary"
                    onClick={() => {
                        setEvents([]);
                    }}
                >
                    Clear
                </Button>
            </Form>
        );
    }
    return (
        <Form>
            <a className="template-download" href="/events-example.csv" download>CSV Template</a>
            <CSVReader
                cssClass="csv-input"
                label="Select CSV event data"
                onFileLoaded={setEvents}
                parserOptions={papaparseOptions}
            />
        </Form>
    );
};

EventImportForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    locations: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    areas: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    openHouses: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};

export default EventImportForm;
