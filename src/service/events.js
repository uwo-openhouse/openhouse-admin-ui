import validate from 'validate.js';
import {
    createNameMap,
    getBackEndURL, handleRequestError, pullOutJson,
} from './index';

// eslint-disable-next-line import/prefer-default-export
export const fetchEvents = () => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/events`,
        {
            method: 'GET',
            headers,
        },
    )
        .then(handleRequestError)
        .then(pullOutJson);
};

export const sendEditEvent = (event) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/events`,
        {
            method: 'PUT',
            headers,
            body: JSON.stringify(event),
        },
    )
        .then(handleRequestError);
};

export const sendNewEvents = (events) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/events`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify(events),
        },
    )
        .then(handleRequestError)
        .then(pullOutJson);
};

export const sendDeleteEvent = (openHouseID) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/events/${openHouseID}`,
        {
            method: 'DELETE',
            headers,
        },
    )
        .then(handleRequestError);
};

export const getNewEvent = () => ({
    name: '',
    description: '',
    department: '',
    building: '',
    openHouse: '',
});

export const validateEventCSV = (events, buildingNames, departmentNames, openHouseNames) => {
    const eventConstraints = {
        name: {
            presence: true,
            length: {
                minimum: 1,
            },
        },
        description: {
            presence: true,
            length: {
                minimum: 1,
            },
        },
        department: {
            presence: true,
            inclusion: {
                within: departmentNames,
                message: '^%{value} is not a valid department',
            },
        },
        building: {
            presence: true,
            inclusion: {
                within: buildingNames,
                message: '^%{value} is not a valid building',
            },
        },
        openHouse: {
            presence: true,
            inclusion: {
                within: openHouseNames,
                message: '^%{value} is not a valid open house',
            },
        },
    };

    return events.map(event => validate(event, eventConstraints));
};

export const csvImportToEvents = (events, locations, departments, openHouses) => {
    const locationNameMap = createNameMap(locations);
    const departmentNameMap = createNameMap(departments);
    const openHouseNameMap = createNameMap(openHouses);

    return events.map(({
        name, description, department, building, openHouse,
    }) => ({
        name,
        description,
        department: departmentNameMap[department],
        building: locationNameMap[building],
        openHouse: openHouseNameMap[openHouse],
    }));
};
