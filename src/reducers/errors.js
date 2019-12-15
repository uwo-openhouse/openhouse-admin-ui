import * as moment from 'moment';
import actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    data:    [],
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.CREATE_BUILDINGS_FAILURE:
        case actionTypes.DELETE_BUILDINGS_FAILURE:
        case actionTypes.EDIT_BUILDINGS_FAILURE:
        case actionTypes.FETCH_BUILDINGS_FAILURE:
            return {
                ...state,
                data: [...state.data, {
                    time: moment().valueOf(),
                    error: action.payload,
                }],
            };
        default:
            return state;
    }
};
