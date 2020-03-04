import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArea } from '../../reducers';
import DeleteForm from '../../components/EditList/DeleteForm';
import { deleteArea } from '../../actions/areas';


const mapStateToProps = (state, { id }) => {
    const area = getArea(state, id);
    if (!area) {
        return {};
    }
    return {
        name: area.name,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteArea,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm);
