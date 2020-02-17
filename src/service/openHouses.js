import moment from 'moment';
import validate from 'validate.js';
import {
    filterAttributes,
    getBackEndURL, handleRequestError, normalizeDate, pullOutJson,
} from './index';
import { getAuthHeaders } from './auth';

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

export const sendEditOpenHouse = (openHouse, token) => fetch(
    `${getBackEndURL()}/openhouses/${openHouse.uuid}`,
    {
        method: 'PUT',
        headers: getAuthHeaders(token),
        body: JSON.stringify(filterAttributes(openHouse, ['uuid', 'attendees'])),
    },
)
    .then(handleRequestError);

export const sendNewOpenHouse = (openHouse, token) => fetch(
    `${getBackEndURL()}/openhouses`,
    {
        method: 'POST',
        headers: getAuthHeaders(token),
        body: JSON.stringify(openHouse),
    },
)
    .then(handleRequestError)
    .then(pullOutJson);

export const sendDeleteOpenHouse = (openHouseID, token) => fetch(
    `${getBackEndURL()}/openhouses/${openHouseID}`,
    {
        method: 'DELETE',
        headers: getAuthHeaders(token),
    },
)
    .then(handleRequestError);

export const getNewOpenHouse = () => ({
    name: '',
    info: '',
    visible: false,
    date: normalizeDate(moment()
        .unix()),
});

export const validateOpenHouse = (openHouse) => {
    const openHouseConstraints = ({
        name: {
            presence: true,
            length: {
                minimum: 1,
            },
        },
        info: {
            presence: true,
            length: {
                minimum: 1,
            },
        },
        date: {
            presence: true,
            isSameOrAfter: {
                otherTime: normalizeDate(moment()
                    .unix()),
                message: '^date is not in the future',
            },
        },
        visible: {
            presence: true,
        },
    });

    return validate(openHouse, openHouseConstraints);
};
