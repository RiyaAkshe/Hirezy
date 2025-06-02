import React from 'react';
import '../dashboard.css';

const departments = [
  { label: 'Engineering', count: 350, color: '#a7e06a' }, 
  { label: 'Marketing', count: 200, color: '#9370db' }, 
  { label: 'Customer Support', count: 150, color: '#6a9de0' }, 
  { label: 'HR & Finance', count: 110, color: '#facc15' }, 
  { label: 'Sales', count: 90, color: '#f472b6' } 
];

const Resources = () => {
  const totalResources = departments.reduce((sum, dept) => sum + dept.count, 0);

  return (
    <div className="card">
      <h3>Applicant Resources</h3>
  
      <div className="resource-total">1,000</div> 
      <ul className="resource-list">
        {departments.map((d, i) => (
          <li key={i}>
            <span style={{ backgroundColor: d.color }}></span>
            {d.label}
            <b>{d.count}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;