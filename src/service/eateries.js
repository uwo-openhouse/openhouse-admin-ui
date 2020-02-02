import {
    filterAttributes, getBackEndURL, handleRequestError, pullOutJson,
} from './index';

export const fetchEateries = () => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/eateries`,
        {
            method: 'GET',
            headers,
        },
    )
        .then(handleRequestError)
        .then(pullOutJson);
};

export const sendEditEatery = (eatery) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/eateries/${eatery.uuid}`,
        {
            method: 'PUT',
            headers,
            body: JSON.stringify(filterAttributes(eatery, ['uuid'])),
        },
    )
        .then(handleRequestError);
};

export const sendNewEatery = (eatery) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/eateries`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify(eatery),
        },
    )
        .then(handleRequestError)
        .then(pullOutJson);
};

export const sendDeleteEatery = (eateryID) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/eateries/${eateryID}`,
        {
            method: 'DELETE',
            headers,
        },
    )
        .then(handleRequestError);
};

export const getNewEatery = () => ({
    name: '',
    building: '',
    openTime: '00:00',
    closeTime: '01:00',
});
