import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteEvent } from '../../actions/events';
import { getEvent } from '../../reducers';
import DeleteForm from '../../components/EditList/DeleteForm';


const mapStateToProps = (state, { id }) => {
    const event = getEvent(state, id);
    if (!event) {
        return {};
    }
    return ({
        name: event.name,
    });
};

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteEvent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm);
