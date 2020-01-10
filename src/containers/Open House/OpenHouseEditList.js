import { connect } from 'react-redux';
import { getAllOpenHouses, isOpenHousesLoaded } from '../../reducers';
import Loadable from '../../components/Loadable';
import OpenHouseEditList from '../../components/Open House/OpenHouseEditList';


const mapStateToProps = state => ({
    openHouses: getAllOpenHouses(state),
    isLoaded: isOpenHousesLoaded(state),
});

export default connect(mapStateToProps)(Loadable(OpenHouseEditList));
