import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AreaEditForm from '../../components/Area/AreaEditForm';
import { createArea } from '../../actions/areas';


const mapDispatchToProps = dispatch => bindActionCreators({
    onSave: createArea,
}, dispatch);

export default connect(null, mapDispatchToProps)(AreaEditForm);
