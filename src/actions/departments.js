import actionTypes from './actionTypes';
import {
    fetchDepartments, sendDeleteDepartment, sendEditDepartment, sendNewDepartment,
} from '../service/departments';


// eslint-disable-next-line import/prefer-default-export
export const getDepartments = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_DEPARTMENTS_STARTED,
    });

    return fetchDepartments()
        .then((response) => {
            dispatch({
                type: actionTypes.FETCH_DEPARTMENTS_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_DEPARTMENTS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_DEPARTMENTS_ENDED,
            });
        });
};

export const editDepartment = location => (dispatch) => {
    dispatch({
        type: actionTypes.EDIT_DEPARTMENTS_STARTED,
        payload: location,
    });

    return sendEditDepartment(location)
        .then(() => {
            dispatch({
                type: actionTypes.EDIT_DEPARTMENTS_SUCCESS,
                payload: location,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_DEPARTMENTS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.EDIT_DEPARTMENTS_ENDED,
            });
        });
};

export const createDepartment = location => (dispatch) => {
    dispatch({
        type: actionTypes.CREATE_DEPARTMENTS_STARTED,
        payload: location,
    });

    return sendNewDepartment(location)
        .then((response) => {
            dispatch({
                type: actionTypes.CREATE_DEPARTMENTS_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.CREATE_DEPARTMENTS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.CREATE_DEPARTMENTS_ENDED,
            });
        });
};

export const deleteDepartment = locationID => (dispatch) => {
    dispatch({
        type: actionTypes.DELETE_DEPARTMENTS_STARTED,
        payload: locationID,
    });

    return sendDeleteDepartment(locationID)
        .then(() => {
            dispatch({
                type: actionTypes.DELETE_DEPARTMENTS_SUCCESS,
                payload: locationID,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.DELETE_DEPARTMENTS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.DELETE_DEPARTMENTS_ENDED,
            });
        });
};
