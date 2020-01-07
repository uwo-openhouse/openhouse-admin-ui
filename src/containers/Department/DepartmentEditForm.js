import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDepartment } from '../../reducers';

import DepartmentEditForm from '../../components/Department/DepartmentEditForm';
import { editDepartment } from '../../actions/departments';


const mapStateToProps = (state, { id }) => ({
    department: getDepartment(state, id),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onSave: editDepartment,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(DepartmentEditForm);
