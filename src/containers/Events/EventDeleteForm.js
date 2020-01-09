import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteEvent } from '../../actions/events';
import { getEvent } from '../../reducers';
import DeleteForm from '../../components/EditList/DeleteForm';


const mapStateToProps = (state, { id }) => ({
    name: getEvent(state, id).name,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteEvent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm);
