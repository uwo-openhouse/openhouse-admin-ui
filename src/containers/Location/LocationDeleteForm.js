import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLocation } from '../../reducers';
import { deleteLocation } from '../../actions/locations';
import DeleteForm from '../../components/EditList/DeleteForm';


const mapStateToProps = (state, { id }) => ({
    name: getLocation(state, id).name,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteLocation,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm);
