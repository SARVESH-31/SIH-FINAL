import React, { useState, useEffect } from 'react';
import './healthrecordsfordoc.css'; // CSS file for styling the page

const HealthRecordsForDoc = () => {
  const [isMyRecordsOpen, setIsMyRecordsOpen] = useState(false);
  const [isParentRecordsOpen, setIsParentRecordsOpen] = useState(false);
  const [isChildrenRecordsOpen, setIsChildrenRecordsOpen] = useState(false);
  const [healthRecords, setHealthRecords] = useState(null);

  // Simulating fetching data from the backend
  useEffect(() => {
    // Replace this with an actual API call to fetch JSON from the backend
    const fetchData = async () => {
      const records = {
        basicDetails: {
          name: 'John Doe',
          age: 30,
          bloodType: 'O+',
          allergies: 'None',
          lastCheckup: '2023-09-01'
        },
        myHealthRecords: [
          { date: '2023-01-01', condition: 'Flu', treatment: 'Medication A' },
          { date: '2022-11-01', condition: 'Back Pain', treatment: 'Physical Therapy' }
        ],
        parentHealthRecords: [
          { name: 'Jane Doe', condition: 'Diabetes', treatment: 'Insulin' },
          { name: 'Robert Doe', condition: 'Hypertension', treatment: 'Medication B' }
        ],
        childrenHealthRecords: [
          { name: 'Amy Doe', condition: 'Asthma', treatment: 'Inhaler' }
        ]
      };
      setHealthRecords(records);
    };

    fetchData();
  }, []);

  // Toggling tab states
  const toggleMyRecords = () => setIsMyRecordsOpen(!isMyRecordsOpen);
  const toggleParentRecords = () => setIsParentRecordsOpen(!isParentRecordsOpen);
  const toggleChildrenRecords = () => setIsChildrenRecordsOpen(!isChildrenRecordsOpen);

  if (!healthRecords) {
    return <p>Loading health records...</p>;
  }

  const { basicDetails, myHealthRecords, parentHealthRecords, childrenHealthRecords } = healthRecords;

  return (
    <div className="health-records-container">
      <h1>Patient Health Records</h1>
      
      {/* Basic Medical Details */}
      <div className="basic-details">
        <h2>Basic Medical Details</h2>
        <p><strong>Name:</strong> {basicDetails.name}</p>
        <p><strong>Age:</strong> {basicDetails.age}</p>
        <p><strong>Blood Type:</strong> {basicDetails.bloodType}</p>
        <p><strong>Allergies:</strong> {basicDetails.allergies}</p>
        <p><strong>Last Checkup:</strong> {basicDetails.lastCheckup}</p>
      </div>

      {/* Collapsible Tabs */}
      <div className="collapsible-section">
        <div className="tab" onClick={toggleMyRecords}>
          <h3>Patient's Health Records</h3>
          {isMyRecordsOpen && (
            <div className="content">
              {myHealthRecords.map((record, index) => (
                <p key={index}>
                  <strong>Date:</strong> {record.date} - <strong>Condition:</strong> {record.condition} - <strong>Treatment:</strong> {record.treatment}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="tab" onClick={toggleParentRecords}>
          <h3>Patient's Parent Health Records</h3>
          {isParentRecordsOpen && (
            <div className="content">
              {parentHealthRecords.map((record, index) => (
                <p key={index}>
                  <strong>Name:</strong> {record.name} - <strong>Condition:</strong> {record.condition} - <strong>Treatment:</strong> {record.treatment}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="tab" onClick={toggleChildrenRecords}>
          <h3>Patient's Children Health Records</h3>
          {isChildrenRecordsOpen && (
            <div className="content">
              {childrenHealthRecords.map((record, index) => (
                <p key={index}>
                  <strong>Name:</strong> {record.name} - <strong>Condition:</strong> {record.condition} - <strong>Treatment:</strong> {record.treatment}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthRecordsForDoc;
