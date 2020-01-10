import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOpenHouse } from '../../reducers';
import OpenHouseEditForm from '../../components/Open House/OpenHouseEditForm';
import { editOpenHouse } from '../../actions/openHouses';


const mapStateToProps = (state, { id }) => ({
    openHouse: getOpenHouse(state, id),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onSave: editOpenHouse,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(OpenHouseEditForm);
