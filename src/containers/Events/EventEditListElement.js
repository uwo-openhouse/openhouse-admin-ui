import { connect } from 'react-redux';
import { getDepartment, getLocation, getOpenHouse } from '../../reducers';
import EventEditListElement from '../../components/Events/EventEditListElement';

const mapStateToProps = (state, { building, openHouse, department }) => ({
    buildingName: getLocation(state, building).name,
    openHouseName: getOpenHouse(state, openHouse).name,
    departmentName: getDepartment(state, department).name,
});

export default connect(mapStateToProps)(EventEditListElement);
