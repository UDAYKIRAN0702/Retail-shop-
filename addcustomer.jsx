import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addcustomer.css';

function AddCustomer() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert('Customer saved:\n' + JSON.stringify(form, null, 2));
  };

  const handleCancel = () => {
    // Clear the form
    setForm({
      name: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    });
  };

  const handleExit = () => {
    navigate(-1);
  };

  return (
    
   
   
    <div className="page-container">
      <button className="close-button" onClick={handleExit}>X</button>
      <div className="form-container">
        <h2>Add Customer</h2>
        <div className="form-grid">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} />

          <label>Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} />

          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} />

          <label>Address</label>
          <input name="address" value={form.address} onChange={handleChange} />

          <label>City</label>
          <input name="city" value={form.city} onChange={handleChange} />

          <label>State</label>
          <input name="state" value={form.state} onChange={handleChange} />

          <label>ZIP Code</label>
          <input name="zip" value={form.zip} onChange={handleChange} />
        </div>

        <div className="form-actions">
          <button onClick={handleSave}>💾 Save</button>
          <button onClick={handleCancel}>❌ Cancel</button>
          <button onClick={handleExit}>🚪 Exit</button>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
