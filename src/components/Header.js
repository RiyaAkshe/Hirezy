import React, { useState, useEffect } from 'react'; 
import '../dashboard.css';

const Header = () => {
  
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="header">
      <h1>Dashboard</h1>
      <div className="header-right">
        <div className="search-bar">
          <span className="icon">🔍</span> 
          <input type="text" placeholder="Search..." />
        </div>
        <span className="header-icon">🔔</span> 
        <button className="btn" onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'} 
        </button>
        <div className="header-profile">
          <div className="avatar">AS</div>
          <span>Andrew S.</span>
        </div>
      </div>
    </div>
  );
};

export default Header;