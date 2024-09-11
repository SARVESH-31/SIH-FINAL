import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // In case routing is needed
import './signupform.css'; // Importing the CSS file

const SignupForm = () => {
  const [role, setRole] = useState('');
  const [numChildren, setNumChildren] = useState(0);
  const [childrenAadhar, setChildrenAadhar] = useState([]);
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setChildrenAadhar([]); // Reset children Aadhar fields when changing role
  };

  const handleNumChildrenChange = (e) => {
    const number = parseInt(e.target.value, 10);
    setNumChildren(number);
    const childrenFields = Array.from({ length: number }, () => '');
    setChildrenAadhar(childrenFields);
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>

      <div className="form-row">
        <label>Select Role:</label>
        <select value={role} onChange={handleRoleChange} required>
          <option value="">Select Role</option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="pharmacy">Pharmacy</option>
        </select>
      </div>

      {role === 'patient' && (
        <div className="patient-form">
          <div className="form-row">
            <label>Name:</label>
            <input type="text" required />
          </div>

          <div className="form-row">
            <label>Contact Number:</label>
            <input type="tel" required />
          </div>

          <div className="form-row">
            <label>Email:</label>
            <input type="email" required />
          </div>

          <div className="form-row">
            <label>Date of Birth:</label>
            <input type="date" required />
          </div>

          <div className="form-row">
            <label>Gender:</label>
            <select required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-row">
            <label>Aadhar Number:</label>
            <input type="text" required />
          </div>

          <div className="form-row">
            <label>Father's Aadhar Number:</label>
            <input type="text" />
          </div>

          <div className="form-row">
            <label>Mother's Aadhar Number:</label>
            <input type="text" />
          </div>

          <div className="form-row">
            <label>Number of Children:</label>
            <input type="number" value={numChildren} onChange={handleNumChildrenChange} />
          </div>

          {Array.from({ length: numChildren }).map((_, index) => (
            <div key={index} className="form-row">
              <label>Child {index + 1} Aadhar Number:</label>
              <input
                type="text"
                value={childrenAadhar[index]}
                onChange={(e) => {
                  const newChildrenAadhar = [...childrenAadhar];
                  newChildrenAadhar[index] = e.target.value;
                  setChildrenAadhar(newChildrenAadhar);
                }}
              />
            </div>
          ))}
        </div>
      )}

      {role === 'doctor' && (
        <div className="doctor-form">
          <div className="form-row">
            <label>Name:</label>
            <input type="text" required />
          </div>

          <div className="form-row">
            <label>Hospital/Clinic:</label>
            <input type="text" required />
          </div>

          <div className="form-row">
            <label>City:</label>
            <input type="text" required />
          </div>

          <div className="form-row">
            <label>State:</label>
            <input type="text" required />
          </div>

          <div className="form-row">
            <label>Specialty:</label>
            <input type="text" required />
          </div>

          <div className="form-row">
            <label>Contact Number:</label>
            <input type="tel" required />
          </div>

          <div className="form-row">
            <label>Email:</label>
            <input type="email" required />
          </div>

          <div className="form-row">
            <label>License Number:</label>
            <input type="text" required />
          </div>
        </div>
      )}

      {role === 'pharmacy' && (
        <div className="pharmacy-form">
          <div className="form-row">
            <label>Name:</label>
            <input type="text" required />
          </div>

          <div className="form-row">
            <label>City:</label>
            <input type="text" required />
          </div>

          <div className="form-row">
            <label>State:</label>
            <input type="text" required />
          </div>

          <div className="form-row">
            <label>Contact Number:</label>
            <input type="tel" required />
          </div>

          <div className="form-row">
            <label>Email:</label>
            <input type="email" required />
          </div>

          <div className="form-row">
            <label>License Number:</label>
            <input type="text" required />
          </div>
        </div>
      )}

      <button type="submit">Sign Up</button>
    </div>
  );
};

export default SignupForm;
