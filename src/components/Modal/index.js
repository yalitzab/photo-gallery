import React from 'react';

function Modal({currentPhoto}) {
    const { name, category, description, index } = currentPhoto;
    const Modal = ({ onClose, currentPhoto }) => {

    return (
    <div className="modalBackdrop">
        <div className="modalContainer">
            <h3 className="modalTitle">Photo Name</h3>
            <img alt="current category" />
            <p>
            Photo Description
            </p>
            <button onClick={onClose} type="button">
            Close this modal
            </button>
        </div>
    </div>
    );
}}

export default Modal;