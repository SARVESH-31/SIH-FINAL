import React, { useState } from 'react';
import './patientinfo.css'; // Import the CSS file for styling

const PatientInfo = () => {
  // States for symptoms, diagnosis, and suggested treatment
  const [symptoms, setSymptoms] = useState('Fever, Cough, Fatigue');
  const [diagnosis, setDiagnosis] = useState('');
  const [treatment, setTreatment] = useState('');

  // Handlers for form submission
  const handleDiagnosisChange = (e) => setDiagnosis(e.target.value);
  const handleTreatmentChange = (e) => setTreatment(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the diagnosis and treatment submission logic
    alert('Diagnosis and treatment saved successfully!');
  };

  return (
    <div className="patient-info-container">
      <h2>Patient Information</h2>
      <div className="patient-symptoms">
        <h3>Symptoms</h3>
        <p>{symptoms}</p>
      </div>
      <form className="diagnosis-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="diagnosis">Enter Diagnosis:</label>
          <textarea
            id="diagnosis"
            value={diagnosis}
            onChange={handleDiagnosisChange}
            placeholder="Enter the diagnosis here..."
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="treatment">Suggested Treatment:</label>
          <textarea
            id="treatment"
            value={treatment}
            onChange={handleTreatmentChange}
            placeholder="Enter the suggested treatment..."
            rows="4"
            required
          />
        </div>
        <button type="submit" className="submit-button">Save Information</button>
      </form>
    </div>
  );
};

export default PatientInfo;
