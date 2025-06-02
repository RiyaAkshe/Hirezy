import React, { useState } from 'react'; 
import '../dashboard.css';
import Modal from './Modal'; 

const ApplicantsTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState('');

  
  const applicants = [
    { name: 'Alex Johnson', position: 'Software Engineer', date: 'Apr 15, 2027', status: 'View Resume' },
    { name: 'Bob Lee', position: 'Sales Associate', date: 'Apr 10, 2027', status: 'Screening' },
    { name: 'Mark Brown', position: 'Financial Analyst', date: 'Apr 22, 2027', status: 'Job Offer' },
    { name: 'Sandra Davis', position: 'Marketing Manager', date: 'Apr 20, 2027', status: 'Contract' },
  ];

  const handleViewResume = (applicantName) => {
    setSelectedApplicant(applicantName);
    setShowModal(true);
  };

  const handleAction = (applicantName, actionType) => {
    console.log(`${actionType} action for ${applicantName}`);
    
    alert(`${actionType} for ${applicantName} (simulated)`);
  };

  return (
    <div className="card">
      <h3>Applicants List</h3> 
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Date</th> 
            <th>Status</th> 
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((a, i) => (
            <tr key={i}>
              <td>{a.name}</td>
              <td>{a.position}</td>
              <td>{a.date}</td> 
              <td>{a.status}</td> 
              <td>
              
                {a.status === 'View Resume' && (
                  <button className="btn btn-view" onClick={() => handleViewResume(a.name)}>View Resume</button>
                )}
                {a.status === 'Screening' && (
                  <>
                    <button className="btn btn-view" onClick={() => handleAction(a.name, 'View')}>View</button>
                    <button className="btn btn-reject" onClick={() => handleAction(a.name, 'Reject')}>Reject</button>
                  </>
                )}
                {a.status === 'Job Offer' && (
                  <>
                    <button className="btn btn-view" onClick={() => handleAction(a.name, 'View')}>View</button>
                    <button className="btn btn-reject" onClick={() => handleAction(a.name, 'Reject')}>Reject</button>
                  </>
                )}
                {a.status === 'Contract' && (
                  <>
                    <button className="btn btn-view" onClick={() => handleAction(a.name, 'View')}>View</button>
                    <button className="btn btn-reject" onClick={() => handleAction(a.name, 'Reject')}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <Modal applicantName={selectedApplicant} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ApplicantsTable;