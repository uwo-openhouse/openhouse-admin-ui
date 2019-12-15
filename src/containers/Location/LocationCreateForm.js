import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createLocation } from '../../actions/locations';
import LocationEditForm from '../../components/Location/LocationEditForm';


const mapDispatchToProps = dispatch => bindActionCreators({
    onSave: createLocation,
}, dispatch);

export default connect(null, mapDispatchToProps)(LocationEditForm);
