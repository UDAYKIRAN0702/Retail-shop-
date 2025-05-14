import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './billsit.css';

function Bsitting() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: '',
    address1: '',
    address2: '',
    address3: '',
    upiId: '',
    billPrefix: '',
    saleBillHeading: '',
    companyGST: '',
    gstState: '',
    terms: '',
    description: '',
    logo: null,
    signature: null,
  });

  const states = ['Andhra Pradesh', 'Telangana', 'Uttar Pradesh', 'Delhi', 'Maharashtra', 'Tamil Nadu', 'Karnataka', 'Other'];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = () => {
    alert('Saved:\n' + JSON.stringify({ ...formData, logo: 'uploaded', signature: 'uploaded' }, null, 2));
  };

  const handleExit = () => {
    navigate(-1);
  };

  return (
    <div className="page-container">
      <button className="close-button" onClick={() => navigate(-1)}>X</button>
      <div className="form-container">
        <h2>Bill Setting</h2>
        <div className="form-grid">
          <label>Business Name</label>
          <input name="businessName" value={formData.businessName} onChange={handleChange} />

          <label>Address Line 1</label>
          <input name="address1" value={formData.address1} onChange={handleChange} />

          <label>Address Line 2</label>
          <input name="address2" value={formData.address2} onChange={handleChange} />

          <label>Address Line 3</label>
          <input name="address3" value={formData.address3} onChange={handleChange} />

          <label>UPI ID For QR Code</label>
          <input name="upiId" value={formData.upiId} onChange={handleChange} />

          <label>Bill Prefix</label>
          <input name="billPrefix" value={formData.billPrefix} onChange={handleChange} />

          <label>Sale Bill Heading</label>
          <input name="saleBillHeading" value={formData.saleBillHeading} onChange={handleChange} />

          <label>Company GST No.</label>
          <input name="companyGST" value={formData.companyGST} onChange={handleChange} />

          <label>GST State</label>
          <select name="gstState" value={formData.gstState} onChange={handleChange}>
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>

          <label>Terms & Condition</label>
          <input name="terms" value={formData.terms} onChange={handleChange} />

          <label>Description by Line</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>

          <label>Bill Logo</label>
          <input type="file" name="logo" onChange={handleChange} />

          <label>Signature</label>
          <input type="file" name="signature" onChange={handleChange} />
        </div>

        <div className="form-actions">
          <button onClick={handleSubmit}>💾 Save</button>
          <button onClick={handleExit}>🚪 Exit</button>
        </div>
      </div>
    </div>
  );
}

export default Bsitting;
