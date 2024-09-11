import React, { useState, useEffect } from 'react';
import './currentmedications.css'; // Import the CSS file

const CurrentMedications = () => {
  const [medications, setMedications] = useState(null);
  const [checkedMedications, setCheckedMedications] = useState({});

  // Simulating fetching data from the backend
  useEffect(() => {
    const fetchMedications = async () => {
      const meds = {
        morning: [
          { name: 'Tablet A', dosage: '50mg', time: '8:00 AM' },
          { name: 'Tablet B', dosage: '100mg', time: '8:30 AM' },
          { name: 'Tablet C', dosage: '10mg', time: '9:00 AM' }
        ],
        afternoon: [
          { name: 'Tablet D', dosage: '25mg', time: '12:00 PM' },
          { name: 'Tablet E', dosage: '200mg', time: '1:00 PM' }
        ],
        evening: [
          { name: 'Tablet F', dosage: '150mg', time: '6:00 PM' }
        ]
      };
      setMedications(meds);
    };

    fetchMedications();
  }, []);

  const handleCheckboxChange = (timeOfDay, index) => {
    setCheckedMedications((prevState) => ({
      ...prevState,
      [`${timeOfDay}-${index}`]: !prevState[`${timeOfDay}-${index}`],
    }));
  };

  if (!medications) {
    return <p>Loading medications...</p>;
  }

  return (
    <div className="medications-container">
      <h1>Current Medications</h1>

      {/* Morning Medications */}
      <div className="medication-section">
        <h2>Morning</h2>
        <ul>
          {medications.morning.map((med, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={!!checkedMedications[`morning-${index}`]}
                onChange={() => handleCheckboxChange('morning', index)}
              />
              <span className={checkedMedications[`morning-${index}`] ? 'med-taken' : 'med-name'}>
                {med.name}
              </span>{' '}
              - {med.dosage} at {med.time}
            </li>
          ))}
        </ul>
      </div>

      {/* Afternoon Medications */}
      <div className="medication-section">
        <h2>Afternoon</h2>
        <ul>
          {medications.afternoon.map((med, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={!!checkedMedications[`afternoon-${index}`]}
                onChange={() => handleCheckboxChange('afternoon', index)}
              />
              <span className={checkedMedications[`afternoon-${index}`] ? 'med-taken' : 'med-name'}>
                {med.name}
              </span>{' '}
              - {med.dosage} at {med.time}
            </li>
          ))}
        </ul>
      </div>

      {/* Evening Medications */}
      <div className="medication-section">
        <h2>Evening</h2>
        <ul>
          {medications.evening.map((med, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={!!checkedMedications[`evening-${index}`]}
                onChange={() => handleCheckboxChange('evening', index)}
              />
              <span className={checkedMedications[`evening-${index}`] ? 'med-taken' : 'med-name'}>
                {med.name}
              </span>{' '}
              - {med.dosage} at {med.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurrentMedications;
