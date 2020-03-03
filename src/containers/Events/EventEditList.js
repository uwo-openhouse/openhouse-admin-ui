import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loadable from '../../components/Loadable';
import EventEditList from '../../components/Events/EventEditList';
import {
    getAllAreas,
    getAllEvents, getAllOpenHouses, isAreasLoaded, isEventsLoaded, isLocationsLoaded, isOpenHousesLoaded,
} from '../../reducers';
import { deleteEvent } from '../../actions/events';


const mapStateToProps = state => ({
    events: getAllEvents(state),
    openHouses: getAllOpenHouses(state),
    areas: getAllAreas(state),
    isLoaded: isEventsLoaded(state) && isLocationsLoaded(state) && isAreasLoaded(state) && isOpenHousesLoaded(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteEvent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Loadable(EventEditList));
