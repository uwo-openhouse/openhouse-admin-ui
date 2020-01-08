import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

import { Button, Form } from 'react-bootstrap';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';
import { normalizeDate } from '../../service';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);


const OpenHouseEditForm = ({ onClose, onSave, openHouse }) => {
    const [name, setName] = useState(openHouse.name);
    const [date, setDate] = useState(openHouse.date);
    const [datePickerFocused, setDatePickerFocused] = useState(false);

    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="name" defaultValue={name} onChange={event => setName(event.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Date</Form.Label>
                <SingleDatePicker
                    date={moment.unix(date).utc()}
                    onDateChange={newDate => setDate(normalizeDate(newDate.unix()))}
                    focused={datePickerFocused}
                    onFocusChange={({ focused }) => setDatePickerFocused(focused)}
                    id="date-picker"
                />
            </Form.Group>
            <Button
                variant="primary"
                onClick={() => {
                    onSave({ ...openHouse, name, date });
                    onClose();
                }}
            >
                Submit
            </Button>
        </Form>
    );
};


OpenHouseEditForm.propTypes = {
    openHouse: PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
    }).isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};


export default OpenHouseEditForm;
