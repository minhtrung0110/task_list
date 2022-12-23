import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";

function ConfirmModal({title,content,show,onAction}) {

    return (
            <Modal show={show} onHide={()=>onAction('close')}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>onAction('close')}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={()=>onAction('confirm')}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
    );
}

export default ConfirmModal;