import React, { useState } from 'react';

const BabyProfile = () => {
  const [baby, setBaby] = useState({
    name: '',
    birthdate: '',
    weight: '',
    height: '',
  });

  const handleChange = (e) => {
    setBaby({
      ...baby,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send API request to save the baby profile
  };

  return (
    <div className="baby-profile">
      <h2>Baby Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Baby's Name"
          value={baby.name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="birthdate"
          value={baby.birthdate}
          onChange={handleChange}
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={baby.weight}
          onChange={handleChange}
        />
        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          value={baby.height}
          onChange={handleChange}
        />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default BabyProfile;
