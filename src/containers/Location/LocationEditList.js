import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllLocations, isLocationsLoaded } from '../../reducers';
import Loadable from '../../components/Loadable';
import LocationEditList from '../../components/Location/LocationEditList';
import { deleteLocation } from '../../actions/locations';


const mapStateToProps = state => ({
    locations: getAllLocations(state),
    isLoaded: isLocationsLoaded(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteLocation,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Loadable(LocationEditList));
