
import React from 'react';
import './dashboard.css'; 

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import OverviewCards from './components/OverviewCards';
import ApplicantsTable from './components/ApplicantsTable';
import Activity from './components/Activity';
import BarGraph from './components/BarGraph';
import Resources from './components/Resources';
import Schedule from './components/Schedule';
import Tasks from './components/Tasks';
import Vacancies from './components/Vacancies';
import QuickActions from './components/QuickActions'; 

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <OverviewCards />

    
        <div className="main-grid-area">
          <div className="main-grid-left">
          
            <QuickActions />
            <BarGraph />
            <ApplicantsTable />
            <div className="grid-2"> 
              <Vacancies />
              <Tasks />
            </div>
          </div>
          <div className="main-grid-right">
            <Resources />
            <Schedule />
            <Activity />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;