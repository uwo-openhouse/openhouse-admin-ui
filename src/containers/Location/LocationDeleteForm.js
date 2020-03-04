import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLocation } from '../../reducers';
import { deleteLocation } from '../../actions/locations';
import DeleteForm from '../../components/EditList/DeleteForm';


const mapStateToProps = (state, { id }) => {
    const location = getLocation(state, id);
    if (!location) {
        return {};
    }
    return {
        name: location.name,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteLocation,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm);
