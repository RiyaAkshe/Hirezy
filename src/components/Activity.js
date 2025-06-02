import React from 'react';
import '../dashboard.css';

const Activity = () => {
  const today = [
    { user: 'Daren Wright', action: 'viewed 15 candidate profiles', role: 'Software Developer', color: '#6a9de0' },
    { user: 'Caren Smith', action: 'scheduled interviews with 3 candidates', role: 'Marketing Manager', color: '#9370db' }
  ];

  const yesterday = [
    { user: 'Automated Reminder', action: 'sent to Bob Lee to complete interview feedback.', color: '#a7e06a' },
    { user: 'New testing', action: 'for a Project Manager created by Alison.', color: '#facc15' },
    { user: 'Offer letter accepted', action: 'by candidate Mark Brown for the Financial Analyst position.', color: '#f472b6' }
  ];

  const renderEntry = ({ user, action, role = '', color }, i) => (
    <div key={i} className="activity-entry">
      <div className="avatar" style={{ backgroundColor: color }}>{user.split(' ').map(w => w[0]).join('').slice(0, 2)}</div>
      <p><strong>{user}</strong> {action}</p>
    </div>
  );

  return (
    <div className="card">
      <h3>Recent Activity</h3>
      <p className="subheading">Today</p>
      {today.map(renderEntry)}
      <p className="subheading">Yesterday</p>
      {yesterday.map(renderEntry)}
    </div>
  );
};

export default Activity;