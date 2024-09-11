import React, { useState } from 'react';
import './doctorhome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faQrcode, faEye, faEyeSlash, faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DoctorHome = () => {
  const [activeTab, setActiveTab] = useState('schedule');
  const [showAllSlots, setShowAllSlots] = useState(false);
  const [schedule, setSchedule] = useState(generateSchedule());
  const navigate = useNavigate(); // Initialize navigate

  // Handle tab click to toggle between schedule and scanner
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Toggle showing all slots in the schedule
  const toggleShowAllSlots = () => {
    setShowAllSlots(!showAllSlots);
  };

  // Toggle slot status between blocked and unblocked
  const toggleSlotStatus = (index) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index].blocked = !updatedSchedule[index].blocked;
    setSchedule(updatedSchedule);
  };

  // Function to handle navigation to specific paths
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Function to handle navigation to the role-based page
  const handleRBPNavigation = (role) => {
    navigate('/rolebasedpage', { state: { role } }); // Passing the role as state
  };

  return (
    <div className="doctor-home-container">
      <div className="navigation-buttons">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="profile-buttondoc"
          onClick={() => handleNavigation('/docprofile')} // Navigate to the profile page
        />
      </div>
      <h1 className='redbhai'>Welcome, Doctor</h1>
      <p className="subtextss">How can we assist you today?</p>
      <div className="collapsible-sections">
        <div className="collapsible-section">
          <div className="collapsible-header" onClick={() => handleTabClick('schedule')}>
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Schedule
          </div>
          {activeTab === 'schedule' && (
            <div className="schedule-container">
              <div className="schedule-header">
                <h2>Your Schedule</h2>
                <div className="show-slots">
                  <label>
                    <input
                      type="checkbox"
                      checked={showAllSlots}
                      onChange={toggleShowAllSlots}
                    />
                    <FontAwesomeIcon icon={showAllSlots ? faEye : faEyeSlash} className="icon" />
                    Show All Slots
                  </label>
                </div>
              </div>
              <input type="date" />
              <div className="schedule">
                {schedule
                  .filter(slot => showAllSlots || slot.booked)
                  .map((slot, index) => (
                    <div key={index} className={`schedule-slot ${slot.blocked ? 'blocked' : ''}`}>
                      <span>{slot.time}</span>
                      <button onClick={() => toggleSlotStatus(index)}>
                        {slot.blocked ? 'Unblock Slot' : 'Block Slot'}
                      </button>
                    </div>
                  ))
                }
              </div>
            </div>
          )}
        </div>
        <div className="collapsible-section">
          <div className="collapsible-header" onClick={() => handleTabClick('scanner')}>
            <FontAwesomeIcon icon={faQrcode} className="icon" /> Scan QR Code
          </div>
          {activeTab === 'scanner' && (
            <div className="scanner-container">
              <h2>Scan QR Code</h2>
              <button onClick={() => handleRBPNavigation('doctor')}>Open Scanner</button> {/* Replace 'doctor' with the actual role obtained from scanning */}
              <p>Scan the QR code to view patient records.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to generate schedule slots
const generateSchedule = () => {
  const slots = [];
  const times = [
    ...generateTimeSlots('10:00', '13:00'),
    ...generateTimeSlots('15:00', '20:00')
  ];

  times.forEach(time => {
    slots.push({ time, blocked: false, booked: false });
  });

  return slots;
};

// Generate time slots between start and end times
const generateTimeSlots = (start, end) => {
  const slots = [];
  const startTime = new Date(`1970-01-01T${start}:00`);
  const endTime = new Date(`1970-01-01T${end}:00`);
  
  while (startTime < endTime) {
    const slotTime = startTime.toTimeString().substring(0, 5);
    slots.push(slotTime);
    startTime.setMinutes(startTime.getMinutes() + 30); // 30-minute slots
  }

  return slots;
};

export default DoctorHome;
