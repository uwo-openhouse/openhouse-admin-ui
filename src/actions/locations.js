import actionTypes from './actionTypes';
import {
    fetchLocations, sendDeleteLocation, sendEditLocation, sendNewLocation,
} from '../service/locations';


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
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_BUILDINGS_ENDED,
            });
        });
};


export const editLocation = location => (dispatch) => {
    dispatch({
        type: actionTypes.EDIT_BUILDINGS_STARTED,
        payload: location,
    });

    return sendEditLocation(location)
        .then(() => {
            dispatch({
                type: actionTypes.EDIT_BUILDINGS_SUCCESS,
                payload: location,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_BUILDINGS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.EDIT_BUILDINGS_ENDED,
            });
        });
};

export const createLocation = location => (dispatch) => {
    dispatch({
        type: actionTypes.CREATE_BUILDINGS_STARTED,
        payload: location,
    });

    return sendNewLocation(location)
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
        })
        .finally(() => {
            dispatch({
                type: actionTypes.CREATE_BUILDINGS_ENDED,
            });
        });
};

export const deleteLocation = locationID => (dispatch) => {
    dispatch({
        type: actionTypes.DELETE_BUILDINGS_STARTED,
        payload: locationID,
    });

    return sendDeleteLocation(locationID)
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
        })
        .finally(() => {
            dispatch({
                type: actionTypes.DELETE_BUILDINGS_ENDED,
            });
        });
};
