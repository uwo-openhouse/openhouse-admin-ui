import { connect } from 'react-redux';
import Loadable from '../../components/Loadable';
import EventEditList from '../../components/Events/EventEditList';
import {
    getAllAreas,
    getAllEvents, getAllOpenHouses, isAreasLoaded, isEventsLoaded, isLocationsLoaded, isOpenHousesLoaded,
} from '../../reducers';


const mapStateToProps = state => ({
    events: getAllEvents(state),
    openHouses: getAllOpenHouses(state),
    areas: getAllAreas(state),
    isLoaded: isEventsLoaded(state) && isLocationsLoaded(state) && isAreasLoaded(state) && isOpenHousesLoaded(state),
});

export default connect(mapStateToProps)(Loadable(EventEditList));
