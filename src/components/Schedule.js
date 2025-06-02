import React from 'react';
import '../dashboard.css';

const events = [
  { time: '10:00 AM - 11:00 AM', title: 'Marketing Strategy Presentation', color: '#a7e06a' },
  { time: '11:30 AM - 12:30 PM', title: 'HR Policy Update Session', color: '#9370db' },
  { time: '02:00 PM - 03:00 PM', title: 'Customer Feedback Analysis', color: '#6a9de0' },
  { time: '03:30 PM - 04:30 PM', title: 'Financial Reporting Session', color: '#facc15' }
];

const Schedule = () => (
  <div className="card">
    <h3>Schedule</h3>
    {events.map((e, i) => (
      <div key={i} className="schedule-item" style={{ backgroundColor: e.color }}>
        <p className="time">{e.time}</p>
        <p>{e.title}</p>
      </div>
    ))}
  </div>
);

export default Schedule;