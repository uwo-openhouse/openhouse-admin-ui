// eslint-disable-next-line import/prefer-default-export
import actionTypes from './actionTypes';
import {
    fetchEvents, sendDeleteEvent, sendEditEvent, sendNewEvents,
} from '../service/events';

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

export const editEvent = event => (dispatch) => {
    dispatch({
        type: actionTypes.EDIT_EVENTS_STARTED,
        payload: event,
    });

    return sendEditEvent(event)
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

export const createEvents = events => (dispatch) => {
    dispatch({
        type: actionTypes.CREATE_EVENTS_STARTED,
        payload: events,
    });

    return sendNewEvents(events)
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

export const deleteEvent = eventID => (dispatch) => {
    dispatch({
        type: actionTypes.DELETE_EVENTS_STARTED,
        payload: eventID,
    });

    return sendDeleteEvent(eventID)
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
