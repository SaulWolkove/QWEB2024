import React, { useState } from 'react';

const EventForm = ({ submitEvent }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    bio: '',
    location: '',
    color: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEvent(formData);
    setFormData({
      title: '',
      date: '',
      bio: '',
      location: '',
      color: ''
    });
    window.location.reload();

  };

  return (
    <div>
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Date/Time:
          <input type="text" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label><br/><br/>
          Description:
          <textarea name="bio" value={formData.bio} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={formData.link} onChange={handleChange} required />
        </label>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm;