import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalContainer = document.getElementById('modals');

const Modal = ({ isModalOpen, onClose }) =>
isModalOpen &&
  ReactDOM.createPortal(
    <div className="modal">
      <h2>MODAL TITLE</h2>
      <p>
        Check where I am mounted in the DOM{" "}
        <span role="img" aria-label="emoji1">
          😃
        </span>
      </p>
      <button className="btn close-btn" onClick={onClose}>
        CloseMe
      </button>
    </div>,
    modalContainer
  );

Modal.propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
  };

export default Modal;