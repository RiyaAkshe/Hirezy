import React from 'react';
import '../dashboard.css';

const Sidebar = () => {
  const links = [
    { label: 'Dashboard', icon: '🏠' },
    { label: 'Jobs', icon: '💼' },
    { label: 'Candidates', icon: '👥' },
    { label: 'Calendar', icon: '📅' },
    { label: 'Analytics', icon: '📊' },
    { label: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="logo">🚀</span>
        <h2>Hirezy</h2>
      </div>

      <nav>
        <ul className="sidebar-links">
          {links.map((link, i) => (
            <li key={i}>
              <a href="#" className={i === 0 ? 'active' : ''}>
                <span className="icon">{link.icon}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      
      <div className="elevate-card">
        <h4>Elevate Your Recruitment Strategy</h4>
        <p>Unlock premium features and gain deeper insights to optimize your hiring process.</p>
        <button className="btn">Upgrade Now</button>
      </div>

      <div className="sidebar-footer">
        <div className="user-box">
          <div className="avatar">AS</div>
          <div>
            <p className="username">Andrew S.</p>
            <small className="role">Recruiter</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;