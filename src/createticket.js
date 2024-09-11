import React, { useState } from 'react';
import './createticket.css'; // Link to your CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const CreateTicket = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [currentSymptom, setCurrentSymptom] = useState("");
  const [showDoctorDropdown, setShowDoctorDropdown] = useState(false);
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);

  const handleAddSymptom = () => {
    if (currentSymptom.trim() !== "") {
      setSymptoms([...symptoms, currentSymptom]);
      setCurrentSymptom("");
    }
  };

  const handleRemoveSymptom = (index) => {
    setSymptoms(symptoms.filter((_, i) => i !== index));
  };

  const toggleDoctorDropdown = () => {
    setShowDoctorDropdown(!showDoctorDropdown);
  };

  const openSchedulePopup = () => {
    setShowSchedulePopup(true);
  };

  const closeSchedulePopup = () => {
    setShowSchedulePopup(false);
  };

  const generateQRCode = () => {
    alert("QR Code Generated");
  };

  return (
    <div className="create-ticket-container">
      <h2 className='harabhai'>Create Ticket</h2>
      
      {/* Symptom Section */}
      <div className="symptom-section">
        <label>Symptoms:</label>
        <div className="symptom-input">
          <input
            type="text"
            value={currentSymptom}
            onChange={(e) => setCurrentSymptom(e.target.value)}
            placeholder="Enter a symptom"
          />
          <button onClick={handleAddSymptom}>Add Symptom</button>
        </div>
        <div className="symptom-list">
          {symptoms.map((symptom, index) => (
            <div key={index} className="symptom-box">
              {symptom}
              <FontAwesomeIcon icon={faTimes} className="remove-icon" onClick={() => handleRemoveSymptom(index)} />
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Section */}
      <div className="doctor-section">
        <label>Suggested Doctor:</label>
        <div className="doctor-box">
          <p>Dr. Smith, City Clinic, Cardiology</p>
          <label>
            <input type="checkbox" onChange={toggleDoctorDropdown} />
            I want to choose my own doctor
          </label>
        </div>

        {showDoctorDropdown && (
          <div className="doctor-dropdown">
            <select>
              <option>Dr. John, ABC Hospital, Neurology</option>
              <option>Dr. Emily, XYZ Clinic, Pediatrics</option>
              {/* Add more doctors */}
            </select>
          </div>
        )}
      </div>

      {/* Schedule Popup */}
      <div className="schedule-section">
        <button className="schedule-button" onClick={openSchedulePopup}>
          <FontAwesomeIcon icon={faCalendarAlt} /> Choose Slot
        </button>
      </div>

      {showSchedulePopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Select a Slot</h3>
            <p>[Slots will be shown here]</p>
            <button className="close-popup" onClick={closeSchedulePopup}>Close</button>
          </div>
        </div>
      )}

      {/* Generate QR Code */}
      <button className="generate-qr-button" onClick={generateQRCode}>
        Generate QR
      </button>
    </div>
  );
};

export default CreateTicket;
