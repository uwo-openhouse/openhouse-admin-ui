import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { purgeToken } from '../actions/auth';
import SignedInLayout from '../components/SignedInLayout';

const mapDispatchToProps = dispatch => bindActionCreators({
    onPurgeAuth: purgeToken,
}, dispatch);

export default connect(null, mapDispatchToProps)(SignedInLayout);
