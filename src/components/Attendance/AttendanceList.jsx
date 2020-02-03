import { Container } from 'react-bootstrap';
import React from 'react';
import * as PropTypes from 'prop-types';
import OpenHouseAttendance from '../../containers/Attendance/OpenHouseAttendance';


const AttendanceList = ({ openHouses }) => (
    <Container>
        {openHouses
            .sort((a, b) => a.date - b.date)
            .map(openHouse => (
                <OpenHouseAttendance key={openHouse.uuid} openHouse={openHouse} />
            ))}
    </Container>
);

AttendanceList.propTypes = {
    openHouses: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
        visible: PropTypes.bool.isRequired,
        date: PropTypes.number.isRequired,
        attendees: PropTypes.number.isRequired,
    })).isRequired,
};

export default AttendanceList;
