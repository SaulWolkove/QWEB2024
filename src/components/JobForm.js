import React, { useState } from 'react';

const JobForm = ({ submitJob }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    bio: '',
    link: '',
    color: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitJob(formData);
    setFormData({
      title: '',
      date: '',
      bio: '',
      link: '',
      color: ''
    });
    window.location.reload();
  };

  return (
    <div>
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Date/Time:
          <input type="text" name="date" value={formData.date} onChange={handleChange} required />
        </label><br/><br/>
        <label>
          Description:
          <textarea name="bio" value={formData.bio} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label><br/><br/>
        <label>
          Link:
          <input type="text" name="link" value={formData.link} onChange={handleChange} required />
        </label>
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default JobForm;