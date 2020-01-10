import { Modal } from 'react-bootstrap';
import React from 'react';
import * as PropTypes from 'prop-types';


const CenteredModal = ({
    children, onClose, title, isVisible,
}) => (
    <Modal
        show={isVisible}
        onHide={onClose}
        size="xl"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
    </Modal>
);


CenteredModal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
};

export default CenteredModal;
