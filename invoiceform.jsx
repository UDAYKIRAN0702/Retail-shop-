import React, { useState } from 'react';
import './invoice.css';

const ReportForm1 = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Report submitted:', formData);
    alert('Report submitted!');
    // Reset form
    setFormData({ title: '', description: '', type: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="report-form">
      <h2>Submit a Report</h2>

      <label>Report Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label>Report Type</label>
      <select name="type" value={formData.type} onChange={handleChange} required>
        <option value="">Select Type</option>
        <option value="bug">Bug</option>
        <option value="incident">Incident</option>
        <option value="feedback">Feedback</option>
      </select>

      <label>Date</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit Report</button>
    </form>
  );
};

export default ReportForm1;
