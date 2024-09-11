import React, { useState } from 'react';
import './patientprofile.css'; // Import the CSS for styling

const PatientProfile = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  // Hardcoded sample patient data (replace this with actual data when backend is added)
  const patient = {
    name: "John Doe",
    dob: "1985-06-15",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    gender: "Male",
    aadhar: "123456781234",
    fatherAadhar: "234567891234",
    motherAadhar: "345678901234",
    numOfChildren: 2,
    childrenAadhar: ["456789012345", "567890123456"],
    image: "./components/logo",
    qrCode: "https://via.placeholder.com/150"
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
          <p><strong>Date of Birth:</strong> {patient.dob}</p>
          <p><strong>Email:</strong> {patient.email}</p>
          <p><strong>Phone Number:</strong> {patient.phone}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Aadhar Number:</strong> {encodeAadhar(patient.aadhar)}</p>
          <p><strong>Father's Aadhar Number:</strong> {encodeAadhar(patient.fatherAadhar)}</p>
          <p><strong>Mother's Aadhar Number:</strong> {encodeAadhar(patient.motherAadhar)}</p>
          <p><strong>Number of Children:</strong> {patient.numOfChildren}</p>
          {patient.numOfChildren > 0 && (
            <div>
              <strong>Children's Aadhar Numbers:</strong>
              <ul>
                {patient.childrenAadhar.map((childAadhar, index) => (
                  <li key={index}>{encodeAadhar(childAadhar)}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="qr-button-container">
          <button className="qr-button" onClick={() => setShowQRCode(!showQRCode)}>
            {showQRCode ? 'Hide QR Code' : 'View QR Code'}
          </button>
          {showQRCode && (
            <div className="qr-code">
              <img src={patient.qrCode} alt="QR Code" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
