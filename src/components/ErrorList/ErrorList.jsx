import React from 'react';
import * as PropTypes from 'prop-types';
import ErrorElement from './ErrorElement';
import './ErrorList.scss';


const ErrorList = ({ errors, onHideError }) => (
    <div className="error-list">
        {errors.map((error, index) => ([index, error]))
            .filter(([, error]) => error.isVisible)
            .map(([index, error]) => <ErrorElement key={index} error={error} onDismiss={() => onHideError(index)} />)}
    </div>
);

ErrorList.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.shape({
        action: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        error: PropTypes.any.isRequired,
        isVisible: PropTypes.bool.isRequired,
    })).isRequired,
    onHideError: PropTypes.func.isRequired,
};

export default ErrorList;
