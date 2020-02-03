import moment from 'moment';
import {
    createNameMap, filterAttributes, getBackEndURL, getIDs, handleRequestError, pullOutJson, validate,
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
        `${getBackEndURL()}/events/${event.uuid}`,
        {
            method: 'PUT',
            headers,
            body: JSON.stringify(filterAttributes(event, ['uuid', 'attendees'])),
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
    startTime: '00:00',
    endTime: '01:00',
    room: '',
});

export const validateEvent = (event, buildings, areas, openHouses) => {
    const eventConstraints = ({
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
        endTime: {
            presence: true,
            time: {
                is24Hour: true,
                is12Hour: true,
                message: '^%{value} is not a valid time',
            },
        },
        startTime: {
            presence: true,
            time: {
                is24Hour: true,
                is12Hour: true,
                message: '^%{value} is not a valid time',
            },
            isBefore: {
                otherTime: event.endTime,
                message: `^Start time %{value} is not before end time (${event.endTime})`,
            },
        },
        area: {
            presence: true,
            inclusion: {
                within: getIDs(areas),
                message: '^Not a valid area',
            },
        },
        building: {
            presence: true,
            inclusion: {
                within: getIDs(buildings),
                message: '^Not a valid building',
            },
        },
        room: {
            presence: true,
        },
        openHouse: {
            presence: true,
            inclusion: {
                within: getIDs(openHouses),
                message: '^Not a valid open house',
            },
        },
    });

    return validate(event, eventConstraints);
};

export const validateEventCSV = (events, buildingNames, areaNames, openHouseNames) => {
    const eventConstraints = event => ({
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
        endTime: {
            presence: true,
            time: {
                is24Hour: true,
                is12Hour: true,
                message: '^%{value} is not a valid time',
            },
        },
        startTime: {
            presence: true,
            time: {
                is24Hour: true,
                is12Hour: true,
                message: '^%{value} is not a valid time',
            },
            isBefore: {
                otherTime: event.endTime,
                message: `^Start time %{value} is not before end time (${event.endTime})`,
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
    });

    return events.map(event => validate(event, eventConstraints(event)));
};

const formatTime = time => moment(time, ['H:m', 'h:m A'], true).format('HH:mm');

export const csvImportToEvents = (events, locations, areas, openHouses) => {
    const locationNameMap = createNameMap(locations);
    const areaNameMap = createNameMap(areas);
    const openHouseNameMap = createNameMap(openHouses);

    return events.map(({
        name, description, area, building, openHouse, startTime, endTime, room,
    }) => ({
        name,
        description,
        room,
        startTime: formatTime(startTime),
        endTime: formatTime(endTime),
        area: areaNameMap[area],
        building: locationNameMap[building],
        openHouse: openHouseNameMap[openHouse],
    }));
};
