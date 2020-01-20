import moment from 'moment';
import {
    filterUUID,
    getBackEndURL, handleRequestError, normalizeDate, pullOutJson,
} from './index';

// eslint-disable-next-line import/prefer-default-export
export const fetchOpenHouses = () => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/openhouses`,
        {
            method: 'GET',
            headers,
        },
    )
        .then(handleRequestError)
        .then(pullOutJson);
};

export const sendEditOpenHouse = (openHouse) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/openhouses/${openHouse.uuid}`,
        {
            method: 'PUT',
            headers,
            body: JSON.stringify(filterUUID(openHouse)),
        },
    )
        .then(handleRequestError);
};

export const sendNewOpenHouse = (openHouse) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/openhouses`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify(openHouse),
        },
    )
        .then(handleRequestError)
        .then(pullOutJson);
};

export const sendDeleteOpenHouse = (openHouseID) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/openhouses/${openHouseID}`,
        {
            method: 'DELETE',
            headers,
        },
    )
        .then(handleRequestError);
};

export const getNewOpenHouse = () => ({
    name: '',
    date: normalizeDate(moment().unix()),
});
