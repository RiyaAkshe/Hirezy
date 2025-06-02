import React from 'react';
import '../dashboard.css';

const data = [
  { dept: 'Engineering', height: 80, color: '#a7e06a', count: 110 }, 
  { dept: 'Marketing', height: 60, color: '#9370db', count: 95 }, 
  { dept: 'Customer Support', height: 40, color: '#6a9de0', count: 80 }, 
  { dept: 'HR & Finance', height: 70, color: '#facc15', count: 50 }, 
  { dept: 'Sales', height: 50, color: '#f472b6', count: 65 } 
];

const BarGraph = () => {
  return (
    <div className="card">
      <h3>Application by Department</h3> 
      <div className="bar-chart">
        {data.map((d, i) => (
          <div key={i} className="bar" style={{ height: `${d.height}%`, backgroundColor: d.color }} />
        ))}
      </div>
      <div className="bar-labels">
        {data.map((d, i) => <span key={i}>{d.dept.split(' ')[0]}</span>)} 
      </div>
      
      <div className="bar-labels" style={{ marginTop: '5px', fontWeight: 'bold' }}>
        {data.map((d, i) => <span key={`count-${i}`}>{d.count}</span>)}
      </div>
    </div>
  );
};

export default BarGraph;