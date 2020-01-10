import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OpenHouseEditForm from '../../components/Open House/OpenHouseEditForm';
import { createOpenHouse } from '../../actions/openHouses';


const mapDispatchToProps = dispatch => bindActionCreators({
    onSave: createOpenHouse,
}, dispatch);

export default connect(null, mapDispatchToProps)(OpenHouseEditForm);
