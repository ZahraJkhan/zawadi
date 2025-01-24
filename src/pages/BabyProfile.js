import React, { useEffect, useState } from 'react';

const BabyProfile = () => {
  const [babyProfiles, setBabyProfiles] = useState([]);

  // Fetch baby profiles from the backend (protected route)
  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage

    if (token) {
      fetch('http://localhost:5000/api/baby_profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include JWT token in Authorization header
        },
      })
        .then((response) => response.json()) // Parse the JSON response
        .then((data) => setBabyProfiles(data)) // Set data in state
        .catch((error) => console.error('Error fetching baby profiles:', error)); // Handle error
    } else {
      console.log('No token found. Please log in.');
    }
  }, []); // Empty dependency array to fetch data only once when component mounts

  return (
    <div>
      <h2>Your Baby Profiles</h2>
      <ul>
        {babyProfiles.map((profile) => (
          <li key={profile._id}>
            <h3>{profile.name}</h3>
            <p>Birthdate: {new Date(profile.birthdate).toLocaleDateString()}</p>
            <p>Weight: {profile.weight} kg</p>
            <p>Height: {profile.height} cm</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BabyProfile;
