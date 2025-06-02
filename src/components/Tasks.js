import React from 'react';
import '../dashboard.css';

const tasks = [
  { label: 'Resume Screening', color: '#a7e06a', checked: false }, 
  { label: 'Interview Scheduling', color: '#9370db', checked: false }, 
  { label: 'Candidate Communication', color: '#6a9de0', checked: false }, 
  { label: 'Offer Management', color: '#facc15', checked: false } 
];

const Tasks = () => (
  <div className="card">
    <h3>Tasks</h3>
    <ul className="task-list">
      {tasks.map((task, i) => (
        <li key={i} style={{ backgroundColor: task.color + '20', color: task.color }}>
          <input type="checkbox" defaultChecked={task.checked} /> 
          {task.label}
        </li>
      ))}
    </ul>
  </div>
);

export default Tasks;