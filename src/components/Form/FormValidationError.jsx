import { Alert } from 'react-bootstrap';
import React from 'react';
import * as PropTypes from 'prop-types';
import { isValid } from '../../service';
import './FormValidationError.scss';

const FormValidationError = ({ validation, attribute }) => {
    if ((!isValid(validation)) && validation[attribute]) {
        return (
            <Alert className="form-validation-error" variant="danger">
                {validation[attribute].map((validationError, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <React.Fragment key={index}>
                        {validationError}
                        <br />
                    </React.Fragment>
                ))}
            </Alert>
        );
    }
    return null;
};

FormValidationError.propTypes = {
    validation: PropTypes.objectOf(
        PropTypes.arrayOf(
            PropTypes.string,
        ),
    ),
    attribute: PropTypes.string.isRequired,
};

FormValidationError.defaultProps = {
    validation: undefined,
};

export default FormValidationError;
