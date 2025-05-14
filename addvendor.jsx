import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './addvendor.css';

const AddVendor = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    address: '',
    gst: ''
  });

  const [vendors, setVendors] = useState([]);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return alert("Vendor name is required");
    setVendors([...vendors, formData]);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      address: '',
      gst: ''
    });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      address: '',
      gst: ''
    });
  };

  const handleExit = () => {
    navigate(-1); // Go back
  };

  const filteredVendors = vendors.filter(v =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="vendor-container">
      {/* Close Button */}
      <button className="close-button" onClick={handleExit}>X</button>

      <h2>Add Vendor</h2>
      <form onSubmit={handleSubmit} className="vendor-form">
        <input name="name" placeholder="Vendor Name *" value={formData.name} onChange={handleChange} required />
        <input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <input name="gst" placeholder="GST Number" value={formData.gst} onChange={handleChange} />

        <div className="form-buttons">
          <button type="submit">Save Vendor</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search vendor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredVendors.length > 0 && (
        <table className="vendor-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>GST</th>
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map((vendor, idx) => (
              <tr key={idx}>
                <td>{vendor.name}</td>
                <td>{vendor.company}</td>
                <td>{vendor.phone}</td>
                <td>{vendor.email}</td>
                <td>{vendor.address}</td>
                <td>{vendor.gst}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AddVendor;
