import { getBackEndURL, handleRequestError, pullOutJson } from './index';

// eslint-disable-next-line import/prefer-default-export
export const fetchDepartments = () => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/departments`,
        {
            method: 'GET',
            headers,
        },
    )
        .then(handleRequestError)
        .then(pullOutJson);
};

export const sendEditDepartment = (department) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/departments`,
        {
            method: 'PUT',
            headers,
            body: JSON.stringify(department),
        },
    )
        .then(handleRequestError);
};

export const sendNewDepartment = (department) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/departments`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify(department),
        },
    )
        .then(handleRequestError)
        .then(pullOutJson);
};

export const sendDeleteDepartment = (departmentID) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/departments/${departmentID}`,
        {
            method: 'DELETE',
            headers,
        },
    )
        .then(handleRequestError);
};


export const getDefaultColor = () => process.env.REACT_APP_DEFAULT_COLOR;

export const getNewDepartment = () => ({
    name: '',
    color: getDefaultColor(),
});
