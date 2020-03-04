import actionTypes from './actionTypes';
import {
    fetchAreas, sendDeleteArea, sendEditArea, sendNewArea,
} from '../service/areas';
import { getToken } from '../reducers';


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
            return Promise.reject();
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_AREAS_ENDED,
            });
        });
};

export const editArea = area => (dispatch, getState) => {
    dispatch({
        type: actionTypes.EDIT_AREAS_STARTED,
        payload: area,
    });

    return sendEditArea(area, getToken(getState()))
        .then(() => {
            dispatch({
                type: actionTypes.EDIT_AREAS_SUCCESS,
                payload: area,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.EDIT_AREAS_FAILURE,
                payload: error,
            });
            return Promise.reject();
        })
        .finally(() => {
            dispatch({
                type: actionTypes.EDIT_AREAS_ENDED,
            });
        });
};

export const createArea = area => (dispatch, getState) => {
    dispatch({
        type: actionTypes.CREATE_AREAS_STARTED,
        payload: area,
    });

    return sendNewArea(area, getToken(getState()))
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
            return Promise.reject();
        })
        .finally(() => {
            dispatch({
                type: actionTypes.CREATE_AREAS_ENDED,
            });
        });
};

export const deleteArea = areaID => (dispatch, getState) => {
    dispatch({
        type: actionTypes.DELETE_AREAS_STARTED,
        payload: areaID,
    });

    return sendDeleteArea(areaID, getToken(getState()))
        .then(() => {
            dispatch({
                type: actionTypes.DELETE_AREAS_SUCCESS,
                payload: areaID,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.DELETE_AREAS_FAILURE,
                payload: error,
            });
            return Promise.reject();
        })
        .finally(() => {
            dispatch({
                type: actionTypes.DELETE_AREAS_ENDED,
            });
        });
};
