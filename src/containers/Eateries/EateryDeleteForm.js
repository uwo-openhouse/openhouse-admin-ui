import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getEatery } from '../../reducers';
import DeleteForm from '../../components/EditList/DeleteForm';
import { deleteEatery } from '../../actions/eateries';


const mapStateToProps = (state, { id }) => {
    const eatery = getEatery(state, id);
    if (!eatery) {
        return {};
    }
    return ({
        name: eatery.name,
    });
};

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteEatery,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm);
