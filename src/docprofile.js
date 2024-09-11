import React, { useState } from 'react';
import './docprofile.css'; // Import the CSS for styling

const DocProfile = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  // Hardcoded sample patient data (replace this with actual data when backend is added)
  const patient = {
    name: "Dr. John Doe",
    hospitalclinic: "Richards",
    city: "Mumbai",
    state: "+91 9876543210",
    speciality: "Cardiology",
    contact: "+91 9876543210",
    email: "xyz@gmail.com",
    license: "345678901234",
  };

  // Function to encode the first 8 digits of the Aadhar card number
  const encodeAadhar = (aadhar) => {
    return aadhar.slice(0, 4).replace(/\d/g, '*') + aadhar.slice(4, 8).replace(/\d/g, '*') + aadhar.slice(8);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={patient.image} className="profile-image" />
        <div className="profile-details">
          <h2>{patient.name}</h2>
          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>Hosptal/Clinic:</strong> {patient.hospitalclinic}</p>
          <p><strong>City:</strong> {patient.city}</p>
          <p><strong>State:</strong> {patient.state}</p>
          <p><strong>Speciality:</strong> {patient.speciality}</p>
          <p><strong>Contact:</strong> {patient.contact}</p>
          <p><strong>Email:</strong> {patient.email}</p>
          <p><strong>Licence:</strong> {patient.license}</p>
        </div>
      </div>
    </div>
  );
};

export default DocProfile;
