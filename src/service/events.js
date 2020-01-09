import {
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
