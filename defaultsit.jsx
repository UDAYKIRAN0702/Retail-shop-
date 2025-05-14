import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './deafaltsit.css';

const DefaultSettings = () => {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    category: 'General',
    unit: 'PCS',
    gstRate: '18',
    taxType: 'GST Inclusive'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert('Settings saved:\n' + JSON.stringify(settings, null, 2));
  };

  const handleClose = () => {
    navigate(-1); // Or use navigate('/billsettings') for a specific page
  };

  return (
    <div className="settings-form">
      <button className="close-button" onClick={handleClose}>❌</button>

      <h2>Main Setting</h2>

      <div className="form-group">
        <label>Default Category</label>
        <select name="category" value={settings.category} onChange={handleChange}>
          <option value="General">General</option>
          <option value="Grocery">Grocery</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      <div className="form-group">
        <label>Default Unit</label>
        <select name="unit" value={settings.unit} onChange={handleChange}>
          <option value="PCS">PCS</option>
          <option value="KG">KG</option>
          <option value="LTR">LTR</option>
        </select>
      </div>

      <div className="form-group">
        <label>Default GST Rate</label>
        <select name="gstRate" value={settings.gstRate} onChange={handleChange}>
          <option value="0">0%</option>
          <option value="5">5%</option>
          <option value="12">12%</option>
          <option value="18">18%</option>
          <option value="28">28%</option>
        </select>
      </div>

      <div className="form-group">
        <label>Tax Type On Sale</label>
        <select name="taxType" value={settings.taxType} onChange={handleChange}>
          <option value="GST Inclusive">GST Inclusive</option>
          <option value="GST Exclusive">GST Exclusive</option>
        </select>
      </div>

      <div className="button-group">
        <button onClick={handleSave}>💾 Save</button>
        <button onClick={handleClose}>❌ Exit</button>
      </div>
    </div>
  );
};

export default DefaultSettings;
