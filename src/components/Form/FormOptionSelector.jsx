import { Form } from 'react-bootstrap';
import React from 'react';
import * as PropTypes from 'prop-types';


const createOptions = options => options.map(({ uuid, name }) => (
    <option key={uuid} value={uuid}>
        {name}
    </option>
));


const FormOptionSelector = ({
    options, value, placeHolder, onChange,
}) => (
    <Form.Control
        defaultValue={value}
        placeholder={placeHolder}
        as="select"
        onChange={(changeEvent => onChange(changeEvent.target.value))}
    >
        <option disabled value="">{placeHolder}</option>
        {createOptions(options)}
    </Form.Control>
);

FormOptionSelector.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    value: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FormOptionSelector;
