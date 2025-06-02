Hirezy Recruitment Dashboard

1. Project Overview : 
The Hirezy project is a comprehensive recruitment management dashboard designed to streamline and centralize various aspects of the hiring process.This platform provides a centralized interface for HR professionals and hiring managers to efficiently track applicants, manage job postings, monitor key metrics, and perform essential recruitment tasks.


2. Application Architecture & Key Modules : 
The Hirezy web application is structured as an SPA with distinct, modular React components representing different sections of the dashboard. This modularity facilitates maintainability, scalability, and an organized content presentation.

The main modules and functionalities include:

Dashboard Overview (OverviewCards.js, BarGraph.js): Provides a visual summary of recruitment progress, including application statistics, interview stages, and departmental application distribution through interactive charts and cards.

Applicant Tracking System (ApplicantsTable.js, Modal.js): Features a detailed table for managing applicant data, including name, position, application date, and status. A modal component (Modal.js) allows for quick viewing of resume details and other applicant information.

Quick Actions (QuickActions.js): Offers immediate access to frequently used recruitment tasks such as adding new applicants, creating new job postings, scheduling interviews, and sending offer letters.

Recent Activity Feed (Activity.js): Displays a chronological log of recent actions and events within the system, providing transparency and real-time updates on team activities.

Scheduling (Schedule.js): Manages interview schedules and other recruitment-related events with clear timeframes and event titles.

Resources (Resources.js): Provides insights into applicant resources or departmental allocation related to the hiring process.

Navigation and User Interface (Sidebar.js, Header.js): A persistent sidebar offers intuitive navigation to different sections (Dashboard, Jobs, Candidates, Calendar, Analytics, Settings), while a header component provides search functionality, notifications, and user profile access.

The Hirezy dashboard aims to enhance the efficiency and organization of recruitment workflows, providing a robust tool for modern talent acquisition.

4. Setup and Local Development
To set up and run the Hirezy web application on a local machine, ensure Node.js and npm (Node Package Manager) are installed.

Prerequisites:

Install Node.js. npm is included with Node.js.
Verify installation by running:
Bash

node -v
npm -v

Clone the Repository:

Open a terminal or command prompt.
Navigate to the directory where the project should be stored.
Clone the repository using its URL (replace [YOUR_REPOSITORY_URL] with the actual URL):
Bash

git clone [YOUR_REPOSITORY_URL]
Navigate to Project Directory:

Change into the cloned project folder:
Bash

cd [your-project-folder-name]
(e.g., cd hirezy-dashboard)
Install Dependencies:

Install all necessary project dependencies:
Bash

npm install

Start Development Server:

Launch the React application in development mode. The standard command for React development servers is npm start, which often maps to npm run start or npm run dev depending on the project's package.json scripts.
Bash

npm start

This will typically compile the application and open it in a web browser at http://localhost:3000.
