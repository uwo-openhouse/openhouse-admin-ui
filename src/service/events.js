import validate from 'validate.js';
import moment from 'moment';
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
    area: '',
    building: '',
    openHouse: '',
    time: '00:00',
    room: '',
});

validate.validators.time = (value, { is24Hour, is12Hour, message }) => {
    const isValid24Hour = moment(value, 'H:m', true).isValid();
    const isValid12Hour = moment(value, 'h:m A', true).isValid();

    if (!((is12Hour && isValid12Hour) || (is24Hour && isValid24Hour))) {
        return message;
    }
    return undefined;
};

export const validateEventCSV = (events, buildingNames, areaNames, openHouseNames) => {
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
        time: {
            presence: true,
            time: {
                is24Hour: true,
                is12Hour: true,
                message: '^%{value} is not a valid time',
            },
        },
        area: {
            presence: true,
            inclusion: {
                within: areaNames,
                message: '^%{value} is not a valid area',
            },
        },
        building: {
            presence: true,
            inclusion: {
                within: buildingNames,
                message: '^%{value} is not a valid building',
            },
        },
        room: {
            presence: true,
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

export const csvImportToEvents = (events, locations, areas, openHouses) => {
    const locationNameMap = createNameMap(locations);
    const areaNameMap = createNameMap(areas);
    const openHouseNameMap = createNameMap(openHouses);

    return events.map(({
        name, description, area, building, openHouse, time, room,
    }) => ({
        name,
        description,
        room,
        time: moment(time, ['H:m', 'h:m A'], true).format('HH:mm'),
        area: areaNameMap[area],
        building: locationNameMap[building],
        openHouse: openHouseNameMap[openHouse],
    }));
};
