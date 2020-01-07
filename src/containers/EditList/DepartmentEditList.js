import { connect } from 'react-redux';
import { getAllDepartments, isDepartmentsLoaded } from '../../reducers';
import Loadable from '../../components/Loadable';
import DepartmentEditList from '../../components/EditList/DepartmentEditList';


const mapStateToProps = state => ({
    departments: getAllDepartments(state),
    isLoaded: isDepartmentsLoaded(state),
});

export default connect(mapStateToProps)(Loadable(DepartmentEditList));
