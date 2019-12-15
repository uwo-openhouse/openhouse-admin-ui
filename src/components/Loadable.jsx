import React from 'react';
import * as PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';


const Loadable = (WrappedComponent) => {
    const LoadableComponent = (props) => {
        const { isLoading, isLoaded } = props;
        if ((isLoading !== null && !isLoading) || (isLoaded !== null && isLoaded)) {
            return (
                <WrappedComponent {...props} />
            );
        }
        return (<FontAwesomeIcon icon={faSyncAlt} spin />);
    };

    LoadableComponent.propTypes = {
        isLoading: PropTypes.bool,
        isLoaded: PropTypes.bool,
    };

    LoadableComponent.defaultProps = {
        isLoading: null,
        isLoaded: null,
    };
    return LoadableComponent;
};

export default Loadable;
