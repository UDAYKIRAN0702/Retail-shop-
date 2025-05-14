import React from 'react';
import { useNavigate } from 'react-router-dom';
import './bill.css';

const BillSettings = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bill-settings-container">
      <h2>Billing Settings</h2>
      <div className="button-group">
        <button onClick={() => handleClick('/billsit')} className="settings-btn">🧾 Bill Setting</button>
        <button onClick={() => handleClick('/billdesign')} className="settings-btn">🎨 Bill Design</button>
        <button onClick={() => handleClick('/defaultsetting')} className="settings-btn">⚙️ Default Setting</button>
      </div>
    </div>
  );
};

export default BillSettings;
