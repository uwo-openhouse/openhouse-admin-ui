import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllOpenHouses, isOpenHousesLoaded } from '../../reducers';
import Loadable from '../../components/Loadable';
import OpenHouseEditList from '../../components/Open House/OpenHouseEditList';
import { deleteOpenHouse } from '../../actions/openHouses';


const mapStateToProps = state => ({
    openHouses: getAllOpenHouses(state),
    isLoaded: isOpenHousesLoaded(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteOpenHouse,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Loadable(OpenHouseEditList));
