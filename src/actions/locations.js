import actionTypes from './actionTypes';
import {
    fetchLocations, sendDeleteLocation, sendEditLocation, sendNewLocation,
} from '../service/locations';
import { getToken } from '../reducers';


// eslint-disable-next-line import/prefer-default-export
export const getLocations = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_BUILDINGS_STARTED,
    });

    return fetchLocations()
        .then((response) => {
            dispatch({
                type: actionTypes.FETCH_BUILDINGS_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_BUILDINGS_FAILURE,
                payload: error,
            });
            return Promise.reject();
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_BUILDINGS_ENDED,
            });
        });
};


export const editLocation = location => (dispatch, getState) => {
    dispatch({
        type: actionTypes.EDIT_BUILDINGS_STARTED,
        payload: location,
    });

    return sendEditLocation(location, getToken(getState()))
        .then(() => {
            dispatch({
                type: actionTypes.EDIT_BUILDINGS_SUCCESS,
                payload: location,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.EDIT_BUILDINGS_FAILURE,
                payload: error,
            });
            return Promise.reject();
        })
        .finally(() => {
            dispatch({
                type: actionTypes.EDIT_BUILDINGS_ENDED,
            });
        });
};

export const createLocation = location => (dispatch, getState) => {
    dispatch({
        type: actionTypes.CREATE_BUILDINGS_STARTED,
        payload: location,
    });

    return sendNewLocation(location, getToken(getState()))
        .then((response) => {
            dispatch({
                type: actionTypes.CREATE_BUILDINGS_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.CREATE_BUILDINGS_FAILURE,
                payload: error,
            });
            return Promise.reject();
        })
        .finally(() => {
            dispatch({
                type: actionTypes.CREATE_BUILDINGS_ENDED,
            });
        });
};

export const deleteLocation = locationID => (dispatch, getState) => {
    dispatch({
        type: actionTypes.DELETE_BUILDINGS_STARTED,
        payload: locationID,
    });

    return sendDeleteLocation(locationID, getToken(getState()))
        .then(() => {
            dispatch({
                type: actionTypes.DELETE_BUILDINGS_SUCCESS,
                payload: locationID,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.DELETE_BUILDINGS_FAILURE,
                payload: error,
            });
            return Promise.reject();
        })
        .finally(() => {
            dispatch({
                type: actionTypes.DELETE_BUILDINGS_ENDED,
            });
        });
};
