import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const toastContainer = document.getElementById('toasts');

const Toast = ({ isToastOpen }) => 
    isToastOpen &&
  ReactDOM.createPortal(
    <div className="toast">
      <p>
        ACCEPTED{" "}
        <span role="img" aria-label="emoji2">
          ✔️
        </span>
      </p>
    </div>,
    toastContainer
  );

Toast.propTypes = {
    isToastOpen: PropTypes.bool,
  };

export default Toast;