import React, { useEffect } from 'react';
import '../dashboard.css';

const data = [
  { label: 'Applications', value: 1534, color: '#a7e06a', progress: 80 }, 
  { label: 'Interviewing', value: 869, color: '#9370db', progress: 60 }, 
  { label: 'Shortlisted', value: 236, color: '#6a9de0', progress: 40 }, 
  { label: 'Rejected', value: 429, color: '#f472b6', progress: 20 }, 
];

const OverviewCards = () => {
  useEffect(() => {
    document.querySelectorAll('.progress-fill').forEach(bar => {
      const pct = bar.getAttribute('data-progress');
      bar.style.width = pct + '%';
    });
  }, []);

  return (
    <div className="card-container">
      {data.map((item, i) => (
        <div className="card overview-card" key={i}> 
          <p>{item.label}</p>
          <h2>{item.value}</h2>
          <div className="progress-bar">
            <div
              className="progress-fill"
              data-progress={item.progress}
              style={{ backgroundColor: item.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;