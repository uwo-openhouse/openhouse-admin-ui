import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const LoadingButton = ({
    children, onClick, onSuccess, onFail, buttonProps, disabled,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const clickHandler = () => {
        setIsLoading(true);
        onClick()
            .finally(() => {
                setIsLoading(false);
            })
            .then((value) => {
                if (onSuccess !== null) {
                    return onSuccess(value);
                }
                return null;
            }).catch((reason) => {
                if (onFail !== null) {
                    return onFail(reason);
                }
                return null;
            });
    };
    return (
        <Button {...buttonProps} disabled={disabled || isLoading} onClick={clickHandler}>
            {isLoading ? (<FontAwesomeIcon icon={faSyncAlt} spin />) : children}
        </Button>
    );
};

LoadingButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
    onSuccess: PropTypes.func,
    onFail: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    buttonProps: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
};

LoadingButton.defaultProps = {
    disabled: false,
    onSuccess: null,
    onFail: null,
};

export default LoadingButton;
