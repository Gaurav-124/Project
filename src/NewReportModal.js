import React, { useState } from 'react';
import './NewReportModal.css';

const NewReportModal = ({ show, onClose, addReport }) => {
  const [reportTitle, setReportTitle] = useState('');
  const [reportContent, setReportContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reportTitle && reportContent) {
      const generateRandomId = () => Math.floor(100000 + Math.random() * 900000);
      addReport({ id:generateRandomId(), name: reportTitle, date: new Date().toLocaleDateString(), analysis: reportContent });
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>New Report</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="reportTitle">Name</label>
          <input
            type="text"
            id="reportTitle"
            name="reportTitle"
            value={reportTitle}
            onChange={(e) => setReportTitle(e.target.value)}
            required
          />
          <label htmlFor="reportContent">Analysis</label>
          <textarea
            id="reportContent"
            name="reportContent"
            value={reportContent}
            onChange={(e) => setReportContent(e.target.value)}
            required
          />
          <button type="submit">Add Report</button>
        </form>
      </div>
    </div>
  );
};

export default NewReportModal;
