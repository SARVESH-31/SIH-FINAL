import React, { useState } from 'react';
import './medicines.css'; // Import the CSS file for styling

const Medicines = () => {
  // State for managing the list of medicines
  const [medicineName, setMedicineName] = useState('');
  const [medicines, setMedicines] = useState([]);

  // Handle input changes
  const handleMedicineChange = (e) => setMedicineName(e.target.value);

  // Handle form submission to add a medicine
  const handleSubmit = (e) => {
    e.preventDefault();
    if (medicineName.trim()) {
      setMedicines([...medicines, medicineName.trim()]);
      setMedicineName('');
    }
  };

  // Remove a medicine from the list
  const handleRemoveMedicine = (index) => {
    setMedicines(medicines.filter((_, i) => i !== index));
  };

  return (
    <div className="medicines-container">
      <h2>Prescribe Medicines</h2>
      <form className="medicine-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="medicine">Medicine Name:</label>
          <input
            type="text"
            id="medicine"
            value={medicineName}
            onChange={handleMedicineChange}
            placeholder="Enter medicine name..."
            required
          />
        </div>
        <button type="submit" className="add-button">Add Medicine</button>
      </form>
      {medicines.length > 0 && (
        <div className="medicine-list">
          <h3>Prescribed Medicines</h3>
          <ul>
            {medicines.map((medicine, index) => (
              <li key={index} className="medicine-item">
                {medicine}
                <button
                  className="remove-button"
                  onClick={() => handleRemoveMedicine(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Medicines;
