import React, { useState } from 'react';

const Milestones = () => {
  const [milestone, setMilestone] = useState({
    date: '',
    description: '',
  });

  const handleChange = (e) => {
    setMilestone({
      ...milestone,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to add the milestone
  };

  return (
    <div className="milestones">
      <h2>Baby Milestones</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={milestone.date}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Milestone Description"
          value={milestone.description}
          onChange={handleChange}
        />
        <button type="submit">Add Milestone</button>
      </form>
    </div>
  );
};

export default Milestones;
