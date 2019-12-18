import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getErrors } from '../../reducers';
import { hideError } from '../../actions/errors';
import ErrorList from '../../components/ErrorList/ErrorList';


const mapStateToProps = state => ({
    errors: getErrors(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onHideError: hideError,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorList);
