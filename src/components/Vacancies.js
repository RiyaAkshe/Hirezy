import React from 'react';
import '../dashboard.css';

const jobs = [
  { initials: 'SD', title: 'Software Developer', salary: '$70K - $90K', applicants: 120, color: '#a7e06a' },
  { initials: 'GD', title: 'Graphic Designer', salary: '$40K - $55K', applicants: 75, color: '#9370db' },
  { initials: 'SM', title: 'Sales Manager', salary: '$65K - $80K', applicants: 75, color: '#6a9de0' },
  { initials: 'HR', title: 'HR Coordinator', salary: '$50K - $60K', applicants: 60, color: '#facc15' }
];

const Vacancies = () => (
  <div className="card">
    <h3>Current Vacancies</h3>
    {jobs.map((job, i) => (
      <div key={i} className="vacancy-item">
        <div className="vacancy-avatar" style={{ backgroundColor: job.color }}>{job.initials}</div>
        <div className="vacancy-info">
          <p><strong>{job.title}</strong></p>
          <small>{job.salary}</small>
        </div>
        <span>{job.applicants} Applicants</span>
      </div>
    ))}
  </div>
);

export default Vacancies;