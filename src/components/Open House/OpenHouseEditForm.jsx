import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import moment from 'moment-timezone';
import { SingleDatePicker } from 'react-dates';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';
import { getDefaultTimezone, isValid, normalizeDate } from '../../service';
import FormValidationError from '../Form/FormValidationError';
import { validateOpenHouse } from '../../service/openHouses';
import LoadingButton from '../LoadingButton';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);


const OpenHouseEditForm = ({ onClose, onSave, openHouse }) => {
    const [name, setName] = useState(openHouse.name);
    const [info, setInfo] = useState(openHouse.info);
    const [date, setDate] = useState(openHouse.date);
    const [visible, setVisible] = useState(openHouse.visible);
    const [datePickerFocused, setDatePickerFocused] = useState(false);
    const [validationErrors, setValidationErrors] = useState(undefined);

    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="name" defaultValue={name} onChange={event => setName(event.target.value)} />
                <FormValidationError attribute="name" validation={validationErrors} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Info</Form.Label>
                <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="info"
                    defaultValue={info}
                    onChange={event => setInfo(event.target.value)}
                />
                <FormValidationError attribute="info" validation={validationErrors} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Date</Form.Label>
                <SingleDatePicker
                    date={moment.unix(date).tz(getDefaultTimezone())}
                    onDateChange={newDate => setDate(normalizeDate(newDate.unix()))}
                    focused={datePickerFocused}
                    onFocusChange={({ focused }) => setDatePickerFocused(focused)}
                    id="date-picker"
                />
                <FormValidationError attribute="date" validation={validationErrors} />
            </Form.Group>

            <Form.Group>
                <Form.Check type="checkbox" checked={visible} onChange={event => setVisible(event.target.checked)} label="Is Visible" />
                <FormValidationError attribute="visible" validation={validationErrors} />
            </Form.Group>
            <LoadingButton
                buttonProps={{
                    variant: 'primary',
                }}
                onSuccess={() => onClose()}
                onClick={() => {
                    const newOpenHouse = {
                        ...openHouse, name, date, info, visible,
                    };
                    const errors = validateOpenHouse(newOpenHouse);
                    if (isValid(errors)) {
                        return onSave(newOpenHouse);
                    }
                    setValidationErrors(errors);
                    return Promise.reject();
                }}
            >
                Submit
            </LoadingButton>
        </Form>
    );
};


OpenHouseEditForm.propTypes = {
    openHouse: PropTypes.shape({
        name: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
        visible: PropTypes.bool.isRequired,
        date: PropTypes.number.isRequired,
    }).isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};


export default OpenHouseEditForm;
