import moment from 'moment';
import {
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

export const sendEditOpenHouse = (openhouse) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/openhouses`,
        {
            method: 'PUT',
            headers,
            body: JSON.stringify(openhouse),
        },
    )
        .then(handleRequestError);
};

export const sendNewOpenHouse = (openhouse) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/openhouses`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify(openhouse),
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
