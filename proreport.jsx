import React, { useState } from 'react';
import './proreport.css';

const ProductReportForm = () => {
  const [product, setProduct] = useState('All');
  const [category, setCategory] = useState('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handlePrint = () => {
    alert(`Generating report for ${product} (${category}) from ${fromDate} to ${toDate}`);
  };

  return (
    <div className="product-report">
      <h3>Product Report</h3>

      <label>Product Name</label>
      <select value={product} onChange={(e) => setProduct(e.target.value)}>
        <option value="All">All</option>
        <option value="Product A">Product A</option>
        <option value="Product B">Product B</option>
        {/* Add more as needed */}
      </select>

      <label>Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        {/* Add more categories */}
      </select>

      <label>From</label>
      <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />

      <label>To</label>
      <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />

      <button onClick={handlePrint}>🖨️ Print Report</button>
    </div>
  );
};

export default ProductReportForm;
