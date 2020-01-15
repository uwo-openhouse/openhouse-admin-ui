import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EventEditForm from '../../components/Events/EventEditForm';
import { createEvents } from '../../actions/events';
import {
    getAllAreas, getAllLocations, getAllOpenHouses,
} from '../../reducers';

const mapStateToProps = state => ({
    openHouses: getAllOpenHouses(state),
    locations: getAllLocations(state),
    areas: getAllAreas(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onSave: event => createEvents([event]),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventEditForm);
