import React, { useState } from 'react';
import Modal from 'react-modal';
import AddNewReport from '../components/AddNewReport';
import '../components/dashboard1.css';
import { Link } from 'react-router-dom';
// import './navbar.css';

// Sample data
const patients = [
  {
    name: 'John Doe',
    eye: 'Left',
    uploadedDate: '12/9/2022',
    aiInsight: 'Retinopathy',
    detections: 'Hemorrhages, Cotton wool spots, Hard exudates',
  },
  {
    name: 'Jane Smith',
    eye: 'Right',
    uploadedDate: '8/16/2021',
    aiInsight: 'Macular edema',
    detections: 'Hard exudates',
  },
  {
    name: 'Bob Johnson',
    eye: 'Left',
    uploadedDate: '4 days ago',
    aiInsight: 'None',
    detections: 'None',
  },
  {
    name: 'Alice Davis',
    eye: 'Right',
    uploadedDate: '7/12/2021',
    aiInsight: 'Retinopathy',
    detections: 'Cotton wool spots, Hard exudates',
  },
];

const Dashboard1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [patientData, setPatientData] = useState(patients);
  const [searchInput, setSearchInput] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addNewPatient = (newPatient) => {
    setPatientData([...patientData, newPatient]);
    closeModal();
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const filteredPatients = patientData.filter((patient) =>
    patient.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-brand">Retinoscan</div>
        <div className={`navbar-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/home" className="nav-link">Dashboard</Link>
          <Link to="/home" className="nav-link">AI Insights</Link>
          <Link to="/home" className="nav-link">Detections</Link>
          <Link to="/home" className="nav-link">Uploads</Link>
          <Link to="/home" className="nav-link">Help</Link>
        </div>
        <div className="navbar-profile">
          <img src="https://joyful-praline-383b8e.netlify.app/static/media/user.22f4c34002d30a5e60ee.png" alt="Profile" className="profile-picture" />
        </div>
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          ☰
        </div>
      </nav>

      <div className="dashboard">
        <div className="header">
          <h1>Dashboard</h1>
          <button className="new-upload" onClick={openModal}>
            New upload
          </button>
        </div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search by patient or report ID"
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
        <div className="filters">
          <button>All</button>
          <button>Unreviewed</button>
          <button>Reviewed</button>
          <button>Flagged</button>
          <button>Archived</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Eye</th>
              <th>Uploaded</th>
              <th>AI insights</th>
              <th>Detections</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td className="eye">{patient.eye}</td>
                <td>{patient.uploadedDate}</td>
                <td className="ai">{patient.aiInsight}</td>
                <td>{patient.detections}</td>
                <td>
                  <Link to="/report">
                  <button className="btn">Review</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Add New Report"
        >
          <AddNewReport onClose={closeModal} addNewPatient={addNewPatient} />
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard1;
