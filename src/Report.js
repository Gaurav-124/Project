import React, { useState, useEffect } from 'react';
import './report1.css';
import NewReportModal from './NewReportModal';
import { Link } from 'react-router-dom';

const Report = () => {
  const initialReports = [
    { id: 123456, name: 'Samantha Johnson', date: 'Dec 15, 2022', analysis: 'Retinopathy' },
    { id: 123457, name: 'Michael Smith', date: 'Dec 14, 2022', analysis: 'Normal' },
    { id: 123458, name: 'Emily Davis', date: 'Dec 13, 2022', analysis: 'Retinopathy' },
    { id: 123459, name: 'Daniel Brown', date: 'Dec 12, 2022', analysis: 'Normal' },
    { id: 123460, name: 'Olivia Wilson', date: 'Dec 11, 2022', analysis: 'Macular Edema' },
    { id: 123461, name: 'Christopher Taylor', date: 'Dec 10, 2022', analysis: 'Normal' },
    { id: 123462, name: 'Emma Martinez', date: 'Dec 9, 2022', analysis: 'Normal' },
    { id: 123463, name: 'Andrew Anderson', date: 'Dec 8, 2022', analysis: 'Retinopathy' },
    { id: 123464, name: 'Madison Garcia', date: 'Dec 7, 2022', analysis: 'Normal' },
    { id: 123465, name: 'Joshua Hernandez', date: 'Dec 6, 2022', analysis: 'Macular Edema' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [reports, setReports] = useState(initialReports);
  const [filteredReports, setFilteredReports] = useState(initialReports);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    setFilteredReports(
      reports.filter(report =>
        report.name.toLowerCase().includes(lowerCaseQuery) ||
        report.id.toString().includes(lowerCaseQuery)
      )
    );
  }, [searchQuery, reports]);

  const addReport = (newReport) => {
    setReports([...reports, newReport]);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <nav>
          <p className='para'>Retinoscan AI</p>
          <Link to="/">Dashboard</Link>
          <Link to="/home">Analysis</Link>
          <a href="/" className="active">Reports</a>
        </nav>
        <button className="new-report" onClick={() => setShowModal(true)}>New report</button>
      </div>
      <div className="container">
        <h1>Reports</h1>
        <p>View detailed reports on patients' retinal images and AI analysis.</p>
        <input
          type="text"
          placeholder="Search by patient or report ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Patient Name</th>
              <th>Date Created</th>
              <th>AI Analysis</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id}>
                <td>#{report.id}</td>
                <td>{report.name}</td>
                <td>{report.date}</td>
                <td>{report.analysis}</td>
                <td>
                  <Link to="/home">
                  <button>View details</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NewReportModal show={showModal} onClose={() => setShowModal(false)} addReport={addReport} />
    </div>
  );
};

export default Report;
