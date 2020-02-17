// eslint-disable-next-line import/prefer-default-export
import actionTypes from './actionTypes';
import {
    fetchEvents, sendDeleteEvent, sendEditEvent, sendNewEvents,
} from '../service/events';
import { getToken } from '../reducers';

// eslint-disable-next-line import/prefer-default-export
export const getEvents = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_EVENTS_STARTED,
    });

    return fetchEvents()
        .then((response) => {
            dispatch({
                type: actionTypes.FETCH_EVENTS_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_EVENTS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_EVENTS_ENDED,
            });
        });
};

export const editEvent = event => (dispatch, getState) => {
    dispatch({
        type: actionTypes.EDIT_EVENTS_STARTED,
        payload: event,
    });

    return sendEditEvent(event, getToken(getState()))
        .then(() => {
            dispatch({
                type: actionTypes.EDIT_EVENTS_SUCCESS,
                payload: event,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.EDIT_EVENTS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.EDIT_EVENTS_ENDED,
            });
        });
};

export const createEvents = events => (dispatch, getState) => {
    dispatch({
        type: actionTypes.CREATE_EVENTS_STARTED,
        payload: events,
    });

    return sendNewEvents(events, getToken(getState()))
        .then((response) => {
            dispatch({
                type: actionTypes.CREATE_EVENTS_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.CREATE_EVENTS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.CREATE_EVENTS_ENDED,
            });
        });
};

export const deleteEvent = eventID => (dispatch, getState) => {
    dispatch({
        type: actionTypes.DELETE_EVENTS_STARTED,
        payload: eventID,
    });

    return sendDeleteEvent(eventID, getToken(getState()))
        .then(() => {
            dispatch({
                type: actionTypes.DELETE_EVENTS_SUCCESS,
                payload: eventID,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.DELETE_EVENTS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.DELETE_EVENTS_ENDED,
            });
        });
};
