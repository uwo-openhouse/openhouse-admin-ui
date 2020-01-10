import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createEvents } from '../../actions/events';
import {
    getAllDepartments, getAllLocations, getAllOpenHouses,
} from '../../reducers';
import EventImportForm from '../../components/Events/EventImportForm';

const mapStateToProps = state => ({
    openHouses: getAllOpenHouses(state),
    locations: getAllLocations(state),
    departments: getAllDepartments(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onSave: createEvents,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventImportForm);
