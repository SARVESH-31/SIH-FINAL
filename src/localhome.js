import React from 'react';
import './localhome.css'; // Import the CSS file for localhome
import { useNavigate } from 'react-router-dom';
import Navbar from 'E:/SEHAT/sehat-app/src/components/navbar.js';
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical, faPills, faTicketAlt, faStore, faUserCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const LocalHome = () => {
  const localName = "Patient"; // Replace with dynamic local name
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="localhome-container">
      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="profile-button"
          onClick={() => handleNavigation('/patientprofile')} // Navigate to the profile page
        />
      </div>

      <div className="welcome-section">
        <h1 className="greeting">Hello, {localName}</h1>
        <p className="subtext">How can we assist you today?</p>
      </div>

      <div className="options-container">
        <div className="option-box" onClick={() => handleNavigation('/health-records')}>
          <FontAwesomeIcon icon={faFileMedical} className="option-icon" />
          <h2 className="tabs">Health Records</h2>
        </div>
        <div className="option-box" onClick={() => handleNavigation('/current-medication')}>
          <FontAwesomeIcon icon={faPills} className="option-icon" />
          <h2 className="tabs">Current Medication</h2>
        </div>
        <div className="option-box" onClick={() => handleNavigation('/create-ticket')}>
          <FontAwesomeIcon icon={faTicketAlt} className="option-icon" />
          <h2 className="tabs">Create Ticket</h2>
        </div>
        <div className="option-box" onClick={() => handleNavigation('/pharmacy-near-me')}>
          <FontAwesomeIcon icon={faStore} className="option-icon" />
          <h2 className="tabs">Pharmacy Near Me</h2>
        </div>
      </div>
    </div>
  );
};

export default LocalHome;
