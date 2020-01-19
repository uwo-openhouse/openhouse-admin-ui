

// eslint-disable-next-line import/prefer-default-export
import moment from 'moment-timezone';

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
        const { uuid } = element;
        map[uuid] = element;
    });
    return map;
};

export const MODAL_TYPES = Object.freeze({
    none: 0, edit: 1, new: 2, delete: 3,
});

export const getDefaultTimezone = () => process.env.REACT_APP_DEFAULT_TIME_ZONE;

export const normalizeDate = date => moment
    .unix(date)
    .tz(getDefaultTimezone())
    .startOf('day')
    .unix();

export const createNameMap = (elements) => {
    const map = {};
    elements.forEach(({ name, uuid }) => {
        map[name] = uuid;
    });
    return map;
};
