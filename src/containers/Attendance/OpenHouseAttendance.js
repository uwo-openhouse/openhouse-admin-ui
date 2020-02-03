import { connect } from 'react-redux';
import { getAllEvents } from '../../reducers';
import OpenHouseAttendance from '../../components/Attendance/OpenHouseAttendance';


const mapStateToProps = (state, { openHouse }) => ({
    events: getAllEvents(state).filter(event => event.openHouse === openHouse.uuid),
});

export default connect(mapStateToProps)(OpenHouseAttendance);
