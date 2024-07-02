import React from 'react'

function Modal({ show, handleClose, children }) {
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close-button" onClick={handleClose}>&times;</span>
                {children}
            </div>
        </div>
    )
}

export default Modal
