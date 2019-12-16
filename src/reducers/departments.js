import actionTypes from '../actions/actionTypes';
import { buildMap } from '../service';


const DEFAULT_STATE = {
    loading: false,
    loaded: false,
    data: {},
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DEPARTMENTS_STARTED:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_DEPARTMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: buildMap(action.payload),
            };
        case actionTypes.FETCH_DEPARTMENTS_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.CREATE_DEPARTMENTS_SUCCESS:
        case actionTypes.EDIT_DEPARTMENTS_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.id]: action.payload,
                },
            };
        case actionTypes.DELETE_DEPARTMENTS_SUCCESS:
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

export const getAllDepartments = (state) => {
    if (!state) {
        throw new Error('no store');
    }
    if (state.data === null) {
        throw new Error('no store');
    }

    return Object.values(state.data);
};

export const getDepartment = (state, id) => {
    if (!state) {
        throw new Error('no store');
    }
    if (state.data === null) {
        throw new Error('no store');
    }

    return state.data[id];
};
