import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import CSVReader from 'react-csv-reader';
import camelcase from 'camelcase';
import { csvImportToEvents, validateEventCSV } from '../../service/events';
import EventValidationRow from './EventValidationRow';
import './EventImportForm.scss';

const papaparseOptions = {
    header: true,
    skipEmptyLines: true,
    transformHeader: header => camelcase(header),
};

const EventImportForm = ({
    onClose, onSave, locations, departments, openHouses,
}) => {
    const [events, setEvents] = useState([]);
    const locationNames = locations.map(location => location.name);
    const departmentNames = departments.map(department => department.name);
    const openHouseNames = openHouses.map(openHouse => openHouse.name);

    const validation = validateEventCSV(events, locationNames, departmentNames, openHouseNames);
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
                            <th>Time</th>
                            <th>Department</th>
                            <th>Building</th>
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
                <Button
                    className="submit-button"
                    disabled={validation.some(validationError => (validationError !== undefined))}
                    variant="primary"
                    onClick={() => {
                        onSave(csvImportToEvents(events, locations, departments, openHouses)).then(() => onClose());
                    }}
                >
                    Submit
                </Button>
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
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    departments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    openHouses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};

export default EventImportForm;
