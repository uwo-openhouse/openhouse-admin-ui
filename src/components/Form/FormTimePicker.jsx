import React from 'react';
import * as PropTypes from 'prop-types';
import TimePicker from 'react-time-picker';
import './FormTimePicker.scss';

const FormTimePicker = ({ onChange, value, minTime }) => (
    <TimePicker minTime={minTime} onChange={onChange} value={value} maxDetail="minute" />
);

FormTimePicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    minTime: PropTypes.string,
};

FormTimePicker.defaultProps = {
    minTime: undefined,
};

export default FormTimePicker;
