import React from 'react';
import '../dashboard.css'; 

const QuickActions = () => {
  const actions = [
    { label: 'Add New Applicant', icon: '➕', color: '#a7e06a' },
    { label: 'Create New Job', icon: '📝', color: '#9370db' },
    { label: 'Schedule Interview', icon: '🗓️', color: '#6a9de0' },
    { label: 'Send Offer Letter', icon: '✉️', color: '#facc15' },
  ];

  const handleActionClick = (action) => {
    alert(`Action: ${action}`);
    
  };

  return (
    <div className="card quick-actions-card">
      <h3>Quick Actions</h3>
      <div className="quick-actions-grid">
        {actions.map((action, index) => (
          <button
            key={index}
            className="quick-action-btn"
            style={{ backgroundColor: action.color }}
            onClick={() => handleActionClick(action.label)}
          >
            <span className="icon">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;