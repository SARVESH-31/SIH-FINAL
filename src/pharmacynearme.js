import React, { useState } from "react";
import './pharmacynearme.css';

const PharmacyNearMe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pharmacies, setPharmacies] = useState([]);
  const [locationInfo, setLocationInfo] = useState('');

  const getLocation = () => {
    setError('');
    setLoading(true);
    setLocationInfo('');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  const successCallback = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocationInfo(`Your Location: Latitude: ${latitude}, Longitude: ${longitude}`);
    searchPharmacies(latitude, longitude);
  };

  const errorCallback = (error) => {
    setError(`Error getting location: ${error.message}`);
    setLoading(false);
  };

  const searchPharmacies = async (latitude, longitude) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/search_pharmacies/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latitude, longitude }),
      });
      const data = await response.json();
      setLoading(false);
      if (Array.isArray(data["Near pharmacies"]) && data["Near pharmacies"].length > 0) {
        setPharmacies(data["Near pharmacies"]);
      } else {
        setPharmacies([{ name: "No pharmacies found near your location." }]);
      }
    } catch (error) {
      setError(`Error: ${error}`);
      setLoading(false);
    }
  };

  return (
    <div className="pharmacy-near-me">
      <h1>Find Pharmacies Near You</h1>
      <button onClick={getLocation}>Find Pharmacies</button>
      {loading && <div className="loading">Loading pharmacies...</div>}
      {error && <div className="error">{error}</div>}
      <div className="location-info">{locationInfo}</div>
      <ul className="pharmacy-list">
        {pharmacies.map((pharmacy, index) => (
          <li key={index}>
            {pharmacy.name} {pharmacy.location && `(Lat: ${pharmacy.location.latitude}, Lon: ${pharmacy.location.longitude})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PharmacyNearMe;
