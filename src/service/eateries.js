import {
    filterAttributes, getBackEndURL, getIDs, handleRequestError, pullOutJson, validate,
} from './index';
import { getAuthHeaders } from './auth';

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

export const sendEditEatery = (eatery, token) => fetch(
    `${getBackEndURL()}/eateries/${eatery.uuid}`,
    {
        method: 'PUT',
        headers: getAuthHeaders(token),
        body: JSON.stringify(filterAttributes(eatery, ['uuid'])),
    },
)
    .then(handleRequestError);

export const sendNewEatery = (eatery, token) => fetch(
    `${getBackEndURL()}/eateries`,
    {
        method: 'POST',
        headers: getAuthHeaders(token),
        body: JSON.stringify(eatery),
    },
)
    .then(handleRequestError)
    .then(pullOutJson);

export const sendDeleteEatery = (eateryID, token) => fetch(
    `${getBackEndURL()}/eateries/${eateryID}`,
    {
        method: 'DELETE',
        headers: getAuthHeaders(token),
    },
)
    .then(handleRequestError);

export const getNewEatery = () => ({
    name: '',
    building: '',
    openTime: '00:00',
    closeTime: '01:00',
});

export const validateEatery = (eatery, buildings) => {
    const eateryConstraints = ({
        name: {
            presence: true,
            length: {
                minimum: 1,
            },
        },
        closeTime: {
            presence: true,
            time: {
                is24Hour: true,
                is12Hour: true,
                message: '^%{value} is not a valid time',
            },
        },
        openTime: {
            presence: true,
            time: {
                is24Hour: true,
                is12Hour: true,
                message: '^%{value} is not a valid time',
            },
            isBefore: {
                otherTime: eatery.closeTime,
                message: `^Open time %{value} is not before close time (${eatery.closeTime})`,
            },
        },
        building: {
            presence: true,
            inclusion: {
                within: getIDs(buildings),
                message: '^Not a valid building',
            },
        },
    });

    return validate(eatery, eateryConstraints);
};
