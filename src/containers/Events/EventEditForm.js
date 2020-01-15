import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    getAllAreas, getAllLocations, getAllOpenHouses, getEvent,
} from '../../reducers';
import EventEditForm from '../../components/Events/EventEditForm';
import { editEvent } from '../../actions/events';


const mapStateToProps = (state, { id }) => ({
    event: getEvent(state, id),
    openHouses: getAllOpenHouses(state),
    locations: getAllLocations(state),
    areas: getAllAreas(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onSave: editEvent,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(EventEditForm);
