import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArea } from '../../reducers';

import AreaEditForm from '../../components/Area/AreaEditForm';
import { editArea } from '../../actions/areas';


const mapStateToProps = (state, { id }) => ({
    area: getArea(state, id),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onSave: editArea,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(AreaEditForm);
