import React from 'react';
import * as PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const EventValidationRow = ({ id, event, validation }) => {
    const isInvalid = validation !== undefined;

    const createCell = attribute => (
        <td>
            {event[attribute]}
            {' '}
            {isInvalid && validation[attribute] && (
                <>
                    <OverlayTrigger
                        placement="top"
                        overlay={(
                            <Tooltip id={`error-tooltip-${attribute}-${id}`}>
                                {validation[attribute]}
                            </Tooltip>
                        )}
                    >
                        <FontAwesomeIcon icon={faExclamationCircle} />
                    </OverlayTrigger>
                </>
            )}
        </td>
    );

    return (
        <tr className={`event-validation-row ${isInvalid && 'table-danger'}`}>
            {createCell('name')}
            {createCell('description')}
            {createCell('time')}
            {createCell('department')}
            {createCell('building')}
            {createCell('openHouse')}
        </tr>
    );
};

EventValidationRow.propTypes = {
    id: PropTypes.number.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    event: PropTypes.object.isRequired,
    validation: PropTypes.objectOf(
        PropTypes.arrayOf(
            PropTypes.string,
        ),
    ),
};

EventValidationRow.defaultProps = {
    validation: undefined,
};

export default EventValidationRow;
