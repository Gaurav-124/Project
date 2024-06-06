import React, { useState } from 'react';
import '../components/Style.css';

const AddNewReport = ({ onClose, addNewPatient }) => {
  const [patientName, setPatientName] = useState('');
  const [eye, setEye] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [detections, setDetections] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatient = {
      name: patientName,
      eye,
      uploadedDate: new Date().toLocaleDateString(),
      aiInsight: aiAnalysis,
      detections,
    };

    addNewPatient(newPatient);

    // Reset form fields
    setPatientName('');
    setEye('');
    setAiAnalysis('');
    setDetections('');

    // Close the modal
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add new report</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <form  className= " form_" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="patientName">Patient name</label>
            <input
              type="text"
              id="patientName"
              placeholder="Enter patient name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eye">Eye</label>
            <input
              type="text"
              id="eye"
              placeholder="Enter the eye"
              value={eye}
              onChange={(e) => setEye(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="aiAnalysis">AI analysis</label>
            <textarea
              id="aiAnalysis"
              placeholder="Enter analysis"
              value={aiAnalysis}
              onChange={(e) => setAiAnalysis(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="detections">Detections</label>
            <textarea
              id="detections"
              placeholder="Enter detections"
              value={detections}
              onChange={(e) => setDetections(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn">
              Upload
            </button>
            <button type="button" className="btn cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewReport;
