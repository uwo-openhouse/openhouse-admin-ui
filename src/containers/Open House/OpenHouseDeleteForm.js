import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOpenHouse } from '../../reducers';
import DeleteForm from '../../components/EditList/DeleteForm';
import { deleteOpenHouse } from '../../actions/openHouses';


const mapStateToProps = (state, { id }) => {
    const openHouse = getOpenHouse(state, id);
    if (!openHouse) {
        return {};
    }
    return ({
        name: getOpenHouse(state, id).name,
    });
};

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteOpenHouse,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm);
