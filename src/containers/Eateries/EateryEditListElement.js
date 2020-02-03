import { connect } from 'react-redux';
import { getLocation } from '../../reducers';
import EateryEditListElement from '../../components/Eateries/EateryEditListElement';

const mapStateToProps = (state, { building }) => ({
    buildingName: getLocation(state, building).name,
});

export default connect(mapStateToProps)(EateryEditListElement);
