import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DepartmentEditForm from '../../components/Department/DepartmentEditForm';
import { createDepartment } from '../../actions/departments';


const mapDispatchToProps = dispatch => bindActionCreators({
    onSave: createDepartment,
}, dispatch);

export default connect(null, mapDispatchToProps)(DepartmentEditForm);
