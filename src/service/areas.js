import {
    filterAttributes, getBackEndURL, handleRequestError, pullOutJson, validate,
} from './index';
import { getAuthHeaders } from './auth';

// eslint-disable-next-line import/prefer-default-export
export const fetchAreas = () => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/areas`,
        {
            method: 'GET',
            headers,
        },
    )
        .then(handleRequestError)
        .then(pullOutJson);
};

export const sendEditArea = (area, token) => fetch(
    `${getBackEndURL()}/areas/${area.uuid}`,
    {
        method: 'PUT',
        headers: getAuthHeaders(token),
        body: JSON.stringify(filterAttributes(area, ['uuid'])),
    },
)
    .then(handleRequestError);

export const sendNewArea = (area, token) => fetch(
    `${getBackEndURL()}/areas`,
    {
        method: 'POST',
        headers: getAuthHeaders(token),
        body: JSON.stringify(area),
    },
)
    .then(handleRequestError)
    .then(pullOutJson);

export const sendDeleteArea = (areaID, token) => fetch(
    `${getBackEndURL()}/areas/${areaID}`,
    {
        method: 'DELETE',
        headers: getAuthHeaders(token),
    },
)
    .then(handleRequestError);


export const getDefaultColor = () => process.env.REACT_APP_DEFAULT_COLOR;

export const getNewArea = () => ({
    name: '',
    color: getDefaultColor(),
});

export const validateArea = (area) => {
    const areaConstraints = ({
        name: {
            presence: true,
            length: {
                minimum: 1,
            },
        },
        color: {
            presence: true,
            format: /#[\dabcdefABCDEF]{6}/,
        },
    });

    return validate(area, areaConstraints);
};
