import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLocation } from '../../reducers';
import LocationEditForm from '../../components/Location/LocationEditForm';
import { editLocation } from '../../actions/locations';


const mapStateToProps = (state, { id }) => ({
    location: getLocation(state, id),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onSave: editLocation,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(LocationEditForm);
