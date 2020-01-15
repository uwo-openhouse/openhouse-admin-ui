import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArea } from '../../reducers';
import DeleteForm from '../../components/EditList/DeleteForm';
import { deleteArea } from '../../actions/areas';


const mapStateToProps = (state, { id }) => ({
    name: getArea(state, id).name,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteArea,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm);
