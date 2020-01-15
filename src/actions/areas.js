import actionTypes from './actionTypes';
import {
    fetchAreas, sendDeleteArea, sendEditArea, sendNewArea,
} from '../service/areas';


// eslint-disable-next-line import/prefer-default-export
export const getAreas = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_AREAS_STARTED,
    });

    return fetchAreas()
        .then((response) => {
            dispatch({
                type: actionTypes.FETCH_AREAS_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_AREAS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_AREAS_ENDED,
            });
        });
};

export const editArea = location => (dispatch) => {
    dispatch({
        type: actionTypes.EDIT_AREAS_STARTED,
        payload: location,
    });

    return sendEditArea(location)
        .then(() => {
            dispatch({
                type: actionTypes.EDIT_AREAS_SUCCESS,
                payload: location,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_AREAS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.EDIT_AREAS_ENDED,
            });
        });
};

export const createArea = location => (dispatch) => {
    dispatch({
        type: actionTypes.CREATE_AREAS_STARTED,
        payload: location,
    });

    return sendNewArea(location)
        .then((response) => {
            dispatch({
                type: actionTypes.CREATE_AREAS_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.CREATE_AREAS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.CREATE_AREAS_ENDED,
            });
        });
};

export const deleteArea = locationID => (dispatch) => {
    dispatch({
        type: actionTypes.DELETE_AREAS_STARTED,
        payload: locationID,
    });

    return sendDeleteArea(locationID)
        .then(() => {
            dispatch({
                type: actionTypes.DELETE_AREAS_SUCCESS,
                payload: locationID,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.DELETE_AREAS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.DELETE_AREAS_ENDED,
            });
        });
};