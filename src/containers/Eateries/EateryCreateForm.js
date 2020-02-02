import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllLocations } from '../../reducers';
import EateryEditForm from '../../components/Eateries/EateryEditForm';
import { createEatery } from '../../actions/eateries';

const mapStateToProps = state => ({
    locations: getAllLocations(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onSave: createEatery,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(EateryEditForm);
