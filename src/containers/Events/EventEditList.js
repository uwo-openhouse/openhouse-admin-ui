import { connect } from 'react-redux';
import Loadable from '../../components/Loadable';
import EventEditList from '../../components/Events/EventEditList';
import {
    getAllEvents, isDepartmentsLoaded, isEventsLoaded, isLocationsLoaded, isOpenHousesLoaded,
} from '../../reducers';


const mapStateToProps = state => ({
    events: getAllEvents(state),
    isLoaded: isEventsLoaded(state) && isLocationsLoaded(state) && isDepartmentsLoaded(state) && isOpenHousesLoaded(state),
});

export default connect(mapStateToProps)(Loadable(EventEditList));
