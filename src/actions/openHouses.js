
// eslint-disable-next-line import/prefer-default-export
import actionTypes from './actionTypes';
import {
    fetchOpenHouses, sendDeleteOpenHouse, sendEditOpenHouse, sendNewOpenHouse,
} from '../service/openHouses';
import { getToken } from '../reducers';

// eslint-disable-next-line import/prefer-default-export
export const getOpenHouses = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_OPEN_HOUSES_STARTED,
    });

    return fetchOpenHouses()
        .then((response) => {
            dispatch({
                type: actionTypes.FETCH_OPEN_HOUSES_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_OPEN_HOUSES_FAILURE,
                payload: error,
            });
            return Promise.reject();
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_OPEN_HOUSES_ENDED,
            });
        });
};

export const editOpenHouse = openHouse => (dispatch, getState) => {
    dispatch({
        type: actionTypes.EDIT_OPEN_HOUSES_STARTED,
        payload: openHouse,
    });

    return sendEditOpenHouse(openHouse, getToken(getState()))
        .then(() => {
            dispatch({
                type: actionTypes.EDIT_OPEN_HOUSES_SUCCESS,
                payload: openHouse,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.EDIT_OPEN_HOUSES_FAILURE,
                payload: error,
            });
            return Promise.reject();
        })
        .finally(() => {
            dispatch({
                type: actionTypes.EDIT_OPEN_HOUSES_ENDED,
            });
        });
};

export const createOpenHouse = openHouse => (dispatch, getState) => {
    dispatch({
        type: actionTypes.CREATE_OPEN_HOUSES_STARTED,
        payload: openHouse,
    });

    return sendNewOpenHouse(openHouse, getToken(getState()))
        .then((response) => {
            dispatch({
                type: actionTypes.CREATE_OPEN_HOUSES_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.CREATE_OPEN_HOUSES_FAILURE,
                payload: error,
            });
            return Promise.reject();
        })
        .finally(() => {
            dispatch({
                type: actionTypes.CREATE_OPEN_HOUSES_ENDED,
            });
        });
};

export const deleteOpenHouse = openHouseID => (dispatch, getState) => {
    dispatch({
        type: actionTypes.DELETE_OPEN_HOUSES_STARTED,
        payload: openHouseID,
    });

    return sendDeleteOpenHouse(openHouseID, getToken(getState()))
        .then(() => {
            dispatch({
                type: actionTypes.DELETE_OPEN_HOUSES_SUCCESS,
                payload: openHouseID,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.DELETE_OPEN_HOUSES_FAILURE,
                payload: error,
            });
            return Promise.reject();
        })
        .finally(() => {
            dispatch({
                type: actionTypes.DELETE_OPEN_HOUSES_ENDED,
            });
        });
};
