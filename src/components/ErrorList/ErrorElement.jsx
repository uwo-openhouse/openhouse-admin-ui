import { Toast } from 'react-bootstrap';
import React from 'react';
import moment from 'moment';
import * as PropTypes from 'prop-types';
import './ErrorElement.scss';


const ErrorElement = ({ error, onDismiss }) => (
    <Toast onClose={onDismiss} show={error.isVisible} delay={20000} autohide>
        <Toast.Header>
            <strong className="error-title">{error.action}</strong>
            <small>{moment(error.time).format('h:mm:ss\xa0a')}</small>
        </Toast.Header>
        <Toast.Body>{error.error}</Toast.Body>
    </Toast>
);

ErrorElement.propTypes = ({
    error: PropTypes.shape({
        action: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        error: PropTypes.any.isRequired,
        isVisible: PropTypes.bool.isRequired,
    }).isRequired,
    onDismiss: PropTypes.func.isRequired,
});

export default ErrorElement;
