import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDepartment } from '../../reducers';
import DeleteForm from '../../components/EditList/DeleteForm';
import { deleteDepartment } from '../../actions/departments';


const mapStateToProps = (state, { id }) => ({
    name: getDepartment(state, id).name,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteDepartment,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm);
