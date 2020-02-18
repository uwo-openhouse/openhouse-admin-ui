import moment from 'moment-timezone';
import val from 'validate.js';

// eslint-disable-next-line import/prefer-default-export
export const getBackEndURL = () => process.env.REACT_APP_BACKEND_URL;

export const getLoginURL = () => process.env.REACT_APP_LOGIN_URL;

export const gotoLoginPage = () => {
    window.location.href = getLoginURL();
};

export const handleRequestError = (response) => {
    if (response.status === 403) {
        gotoLoginPage();
    }
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

export const filterAttributes = (element, keys) => Object.keys(element)
    .filter(key => !keys.includes(key))
    .reduce((newElement, key) => ({
        ...newElement,
        [key]: element[key],
    }), {});

export const displayTime = time => moment(time, 'H:m').format('h:mm A');

export const getIDs = items => items.map(item => item.uuid);

val.validators.time = (value, { is24Hour, is12Hour, message }) => {
    const isValid24Hour = moment(value, 'H:m', true)
        .isValid();
    const isValid12Hour = moment(value, 'h:m A', true)
        .isValid();

    if (!((is12Hour && isValid12Hour) || (is24Hour && isValid24Hour))) {
        return message;
    }
    return undefined;
};

val.validators.isBefore = (value, { otherTime, message }) => {
    const time1 = moment(value, ['H:m', 'h:m A'], true);
    const time2 = moment(otherTime, ['H:m', 'h:m A'], true);

    if (!time1.isBefore(time2)) {
        return message;
    }
    return undefined;
};

val.validators.isSameOrAfter = (value, { otherTime, message }) => {
    const time1 = moment.unix(value);
    const time2 = moment.unix(otherTime);

    if (!time1.isSameOrAfter(time2)) {
        return message;
    }
    return undefined;
};

export const validate = val;

export const isValid = validationError => validationError === undefined;

export const displayDate = date => moment.unix(date).tz(getDefaultTimezone()).format('MMMM Do YYYY');

export const stateDeleteByAttribute = (data, attributeName, filterValue) => (
    Object.entries(data)
        .filter(([, value]) => value[attributeName] !== filterValue)
        .reduce((result, [key, value]) => ({
            ...result,
            [key]: value,
        }), {})
);
