import {
    filterAttributes, getBackEndURL, handleRequestError, pullOutJson, validate,
} from './index';

// eslint-disable-next-line import/prefer-default-export
export const fetchLocations = () => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/buildings`,
        {
            method: 'GET',
            headers,
        },
    )
        .then(handleRequestError)
        .then(pullOutJson);
};

export const sendEditLocation = (location) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/buildings/${location.uuid}`,
        {
            method: 'PUT',
            headers,
            body: JSON.stringify(filterAttributes(location, ['uuid'])),
        },
    )
        .then(handleRequestError);
};

export const sendNewLocation = (location) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/buildings`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify(location),
        },
    )
        .then(handleRequestError)
        .then(pullOutJson);
};

export const sendDeleteLocation = (locationID) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/buildings/${locationID}`,
        {
            method: 'DELETE',
            headers,
        },
    )
        .then(handleRequestError);
};

export const getDefaultPosition = () => ({
    lat: Number(process.env.REACT_APP_DEFAULT_LAT),
    lng: Number(process.env.REACT_APP_DEFAULT_LNG),
});

export const getNewLocation = () => ({
    name: '',
    position: getDefaultPosition(),
});

export const validateLocation = (location) => {
    const locationConstraints = ({
        name: {
            presence: true,
            length: {
                minimum: 1,
            },
        },
        'position.lat': {
            presence: true,
            numericality: {
                greaterThanOrEqualTo: -90,
                lessThanOrEqualTo: 90,
                notGreaterThanOrEqualTo: 'must not be less than -90 degrees',
                notLessThanOrEqualTo: 'must not be greater than 90 degrees',
            },
        },
        'position.lng': {
            presence: true,
            numericality: {
                greaterThanOrEqualTo: -180,
                lessThanOrEqualTo: 180,
                notGreaterThanOrEqualTo: 'must not be less than -180 degrees',
                notLessThanOrEqualTo: 'must not be greater than 180 degrees',
            },
        },
    });

    return validate(location, locationConstraints);
};
