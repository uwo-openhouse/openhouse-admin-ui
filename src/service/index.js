

// eslint-disable-next-line import/prefer-default-export
import moment from 'moment';

export const getBackEndURL = () => process.env.REACT_APP_BACKEND_URL;


export const handleRequestError = (response) => {
    // TODO handle auth
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

export const pullOutJson = response => response.json();

export const buildMap = (responseJson) => {
    const map = {};
    responseJson.forEach((element) => {
        const { id } = element;
        map[id] = element;
    });
    return map;
};

export const MODAL_TYPES = Object.freeze({
    none: 0, edit: 1, new: 2, delete: 3,
});

export const normalizeDate = date => moment
    .unix(date)
    .utc()
    .startOf('day')
    .unix();
