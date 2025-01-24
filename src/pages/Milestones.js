import React, { useEffect, useState } from 'react';

const Milestones = () => {
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve the token

    if (token) {
      fetch('http://localhost:5000/api/milestones', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include token in header
        },
      })
        .then((response) => response.json())
        .then((data) => setMilestones(data)) // Set data to state
        .catch((error) => console.error('Error fetching milestones:', error));
    } else {
      console.log('No token found. Please log in.');
    }
  }, []);

  return (
    <div>
      <h2>Your Milestones</h2>
      <ul>
        {milestones.map((milestone) => (
          <li key={milestone._id}>
            <p>{milestone.description}</p>
            <p>Date: {new Date(milestone.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Milestones;
