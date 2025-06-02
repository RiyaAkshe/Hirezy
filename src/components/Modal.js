import React from 'react';
import '../dashboard.css';

const Modal = ({ applicantName, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>Resume: {applicantName}</h2>
        <p>Experience: 5+ years in React, Node.js</p>
        <p>Education: M.Sc. CS</p>
        <div style={{ marginTop: '1rem', textAlign: 'right' }}>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;