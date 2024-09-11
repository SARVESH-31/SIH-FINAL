import React, { useState } from 'react';
import './rolebasedpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faQrcode, faEye, faEyeSlash, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation


const RoleBasedPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { role } = location.state || {}; // Extract role from the state
  
    const handleDoctorView = (view) => {
      if (role === 'doctor') {
        switch (view) {
          case 'healthRecords':
            navigate('/healthrecordsfordoc'); // Redirects to HealthRecords.js
            break;
          case 'patientInfo':
            navigate('/patientinfo'); // Redirects to PatientInfo.js
            break;
          case 'medicines':
            navigate('/medicines'); // Redirects to Medicines.js
            break;
          default:
            break;
        }
      }
    };

  const [deliveredMedicines, setDeliveredMedicines] = useState([]);

  // Mock data for different roles
  const appointmentDetails = {
    hospital: 'City Hospital',
    doctor: 'Dr. Smith',
    timeSlot: '10:00 AM - 11:00 AM',
  };

  const medicineList = [
    { id: 1, name: 'Paracetamol' },
    { id: 2, name: 'Amoxicillin' },
    { id: 3, name: 'Ibuprofen' },
  ];

  // Handle medicine delivery checkbox
  const handleDelivered = (medicineId, pharmacyName) => {
    if (deliveredMedicines.includes(medicineId)) {
      setDeliveredMedicines(deliveredMedicines.filter(id => id !== medicineId));
    } else {
      setDeliveredMedicines([...deliveredMedicines, medicineId]);
    }
  };

  return (
    <div className="role-based-page">
      {role === 'patient' && (
        <div className="patient-info">
          <h2>Your Appointment Details</h2>
          <p>Hospital: {appointmentDetails.hospital}</p>
          <p>Doctor: {appointmentDetails.doctor}</p>
          <p>Time Slot: {appointmentDetails.timeSlot}</p>
        </div>
      )}

      {role === 'doctor' && (
        <>
          <button onClick={() => handleDoctorView('healthRecords')} className="doctor-button">
            View Health Records
          </button>
          <button onClick={() => handleDoctorView('patientInfo')} className="doctor-button">
            Patient Info & Diagnosis
          </button>
          <button onClick={() => handleDoctorView('medicines')} className="doctor-button">
            Prescribe Medicines
          </button>
        </>
      )}

      {role === 'pharmacy' && (
        <div className="pharmacy-actions">
          <h2>Medicine Prescription</h2>
          {medicineList.map(medicine => (
            <div key={medicine.id} className="medicine-item">
              <input
                type="checkbox"
                id={`medicine-${medicine.id}`}
                checked={deliveredMedicines.includes(medicine.id)}
                onChange={() => handleDelivered(medicine.id, 'PharmacyName')}
              />
              <label htmlFor={`medicine-${medicine.id}`}>
                {medicine.name} {deliveredMedicines.includes(medicine.id) && `- Delivered by PharmacyName`}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoleBasedPage;
