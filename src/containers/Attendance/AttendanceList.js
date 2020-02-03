import { connect } from 'react-redux';
import {
    getAllOpenHouses, isAreasLoaded, isEventsLoaded, isLocationsLoaded, isOpenHousesLoaded,
} from '../../reducers';
import AttendanceList from '../../components/Attendance/AttendanceList';
import Loadable from '../../components/Loadable';


const mapStateToProps = state => ({
    openHouses: getAllOpenHouses(state),
    isLoaded: isOpenHousesLoaded(state) && isEventsLoaded(state) && isLocationsLoaded(state) && isAreasLoaded(state),
});

export default connect(mapStateToProps)(Loadable(AttendanceList));
