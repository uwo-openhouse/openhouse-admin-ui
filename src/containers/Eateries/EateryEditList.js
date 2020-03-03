import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllEateries, isEateriesLoaded, isLocationsLoaded } from '../../reducers';
import EateryEditList from '../../components/Eateries/EateryEditList';
import Loadable from '../../components/Loadable';
import { deleteEatery } from '../../actions/eateries';


const mapStateToProps = state => ({
    eateries: getAllEateries(state),
    isLoaded: isEateriesLoaded(state) && isLocationsLoaded(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteEatery,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Loadable(EateryEditList));
