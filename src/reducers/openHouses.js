import actionTypes from '../actions/actionTypes';
import { buildMap } from '../service';

const DEFAULT_STATE = {
    loading: false,
    loaded: false,
    data: {},
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_OPEN_HOUSES_STARTED:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_OPEN_HOUSES_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: buildMap(action.payload),
            };
        case actionTypes.FETCH_OPEN_HOUSES_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.CREATE_OPEN_HOUSES_SUCCESS:
        case actionTypes.EDIT_OPEN_HOUSES_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.id]: action.payload,
                },
            };
        case actionTypes.DELETE_OPEN_HOUSES_SUCCESS:
            return {
                ...state,
                data: Object.keys(state.data)
                    .filter(key => key !== action.payload)
                    .reduce((result, current) => ({ ...result, [current]: state.data[current] }), {}),
            };
        default:
            return state;
    }
};

export const isLoaded = (state) => {
    if (!state) {
        throw new Error('no store');
    }

    return state.loaded;
};

export const getAllOpenHouses = (state) => {
    if (!state) {
        throw new Error('no store');
    }
    if (state.data === null) {
        throw new Error('no store');
    }

    return Object.values(state.data);
};

export const getOpenHouse = (state, id) => {
    if (!state) {
        throw new Error('no store');
    }
    if (state.data === null) {
        throw new Error('no store');
    }

    return state.data[id];
};
