import { connect } from 'react-redux';
import { getAllAreas, isAreasLoaded } from '../../reducers';
import Loadable from '../../components/Loadable';
import AreaEditList from '../../components/Area/AreaEditList';


const mapStateToProps = state => ({
    areas: getAllAreas(state),
    isLoaded: isAreasLoaded(state),
});

export default connect(mapStateToProps)(Loadable(AreaEditList));
