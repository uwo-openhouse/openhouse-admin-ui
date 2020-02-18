import * as moment from 'moment';
import actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    data: null,
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.INIT_TOKEN:
            return {
                ...state,
                data: action.payload,
            };
        case actionTypes.PURGE_TOKEN:
            return {
                ...state,
                data: null,
            };
        default:
            return state;
    }
};

export const hasToken = state => state.data !== null && moment().isBefore(moment.unix(state.data.expiryDate));

export const getToken = (state) => {
    if (state.data === null) {
        return null;
    }
    return state.data.token;
};
