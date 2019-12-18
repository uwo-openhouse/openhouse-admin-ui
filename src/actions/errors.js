import actionTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const hideError = index => (dispatch) => {
    dispatch({
        type: actionTypes.HIDE_ERROR,
        payload: index,
    });
};
