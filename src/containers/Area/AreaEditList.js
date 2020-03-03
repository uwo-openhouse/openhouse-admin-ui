import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllAreas, isAreasLoaded } from '../../reducers';
import Loadable from '../../components/Loadable';
import AreaEditList from '../../components/Area/AreaEditList';
import { deleteArea } from '../../actions/areas';


const mapStateToProps = state => ({
    areas: getAllAreas(state),
    isLoaded: isAreasLoaded(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteArea,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Loadable(AreaEditList));
