import { connect } from 'react-redux';
import { getAllEateries, isEateriesLoaded, isLocationsLoaded } from '../../reducers';
import EateryEditList from '../../components/Eateries/EateryEditList';
import Loadable from '../../components/Loadable';


const mapStateToProps = state => ({
    eateries: getAllEateries(state),
    isLoaded: isEateriesLoaded(state) && isLocationsLoaded(state),
});

export default connect(mapStateToProps)(Loadable(EateryEditList));
