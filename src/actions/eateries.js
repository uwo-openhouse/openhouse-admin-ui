import actionTypes from './actionTypes';
import {
    fetchEateries, sendDeleteEatery, sendEditEatery, sendNewEatery,
} from '../service/eateries';
import { getToken } from '../reducers';

export const getEateries = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_EATERIES_STARTED,
    });

    return fetchEateries()
        .then((response) => {
            dispatch({
                type: actionTypes.FETCH_EATERIES_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_EATERIES_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_EATERIES_ENDED,
            });
        });
};

export const editEatery = eatery => (dispatch, getState) => {
    dispatch({
        type: actionTypes.EDIT_EATERIES_STARTED,
        payload: eatery,
    });

    return sendEditEatery(eatery, getToken(getState()))
        .then(() => {
            dispatch({
                type: actionTypes.EDIT_EATERIES_SUCCESS,
                payload: eatery,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.EDIT_EATERIES_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.EDIT_EATERIES_ENDED,
            });
        });
};

export const createEatery = eatery => (dispatch, getState) => {
    dispatch({
        type: actionTypes.CREATE_EATERIES_STARTED,
        payload: eatery,
    });

    return sendNewEatery(eatery, getToken(getState()))
        .then((response) => {
            dispatch({
                type: actionTypes.CREATE_EATERIES_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.CREATE_EATERIES_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.CREATE_EATERIES_ENDED,
            });
        });
};

export const deleteEatery = eateryID => (dispatch, getState) => {
    dispatch({
        type: actionTypes.DELETE_EATERIES_STARTED,
        payload: eateryID,
    });

    return sendDeleteEatery(eateryID, getToken(getState()))
        .then(() => {
            dispatch({
                type: actionTypes.DELETE_EATERIES_SUCCESS,
                payload: eateryID,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.DELETE_EATERIES_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.DELETE_EATERIES_ENDED,
            });
        });
};
