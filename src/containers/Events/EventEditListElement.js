import { connect } from 'react-redux';
import { getArea, getLocation, getOpenHouse } from '../../reducers';
import EventEditListElement from '../../components/Events/EventEditListElement';

const mapStateToProps = (state, { building, openHouse, area }) => ({
    buildingName: getLocation(state, building).name,
    openHouseName: getOpenHouse(state, openHouse).name,
    areaName: getArea(state, area).name,
});

export default connect(mapStateToProps)(EventEditListElement);
