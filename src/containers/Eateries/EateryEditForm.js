import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllLocations, getEatery } from '../../reducers';
import EateryEditForm from '../../components/Eateries/EateryEditForm';
import { editEatery } from '../../actions/eateries';

const mapStateToProps = (state, { id }) => ({
    eatery: getEatery(state, id),
    locations: getAllLocations(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onSave: editEatery,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(EateryEditForm);
