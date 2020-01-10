import { connect } from 'react-redux';
import { getAllLocations, isLocationsLoaded } from '../../reducers';
import Loadable from '../../components/Loadable';
import LocationEditList from '../../components/Location/LocationEditList';


const mapStateToProps = state => ({
    locations: getAllLocations(state),
    isLoaded: isLocationsLoaded(state),
});

export default connect(mapStateToProps)(Loadable(LocationEditList));
