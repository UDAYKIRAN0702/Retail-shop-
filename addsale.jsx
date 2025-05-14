import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addsale.css';

const PurchaseEntry = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    barcode: '',
    productName: '',
    purchasePrice: '',
    quantity: '',
    unitType: 'PCS',
    purchaseDate: '',
    mrp: '',
    salePrice: '',
    vendor: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const newProduct = {
      id: products.length + 1,
      ...form,
      retailPrice: form.salePrice,
      stockQty: form.quantity,
    };
    setProducts([...products, newProduct]);
    setForm({
      barcode: '',
      productName: '',
      purchasePrice: '',
      quantity: '',
      unitType: 'PCS',
      purchaseDate: '',
      mrp: '',
      salePrice: '',
      vendor: '',
    });
  };

  const totalQty = products.reduce((sum, item) => sum + Number(item.quantity), 0);
  const totalPurchase = products.reduce((sum, item) => sum + Number(item.purchasePrice), 0);
  const grandPurchase = products.reduce((sum, item) => sum + (item.purchasePrice * item.quantity), 0);

  return (
    <div className="page-container">
      <button className="close-button" onClick={() => navigate(-1)}>X</button>
      <h2>Add Sale</h2>

      <div className="form-grid">
        <input name="barcode" value={form.barcode} onChange={handleChange} placeholder="BarCode/Code" />
        <input name="productName" value={form.productName} onChange={handleChange} placeholder="Product Name" />
        <input name="purchasePrice" value={form.purchasePrice} onChange={handleChange} type="number" placeholder="Purchase Price" />
        <input name="quantity" value={form.quantity} onChange={handleChange} type="number" placeholder="Purchase Qty" />
        <input name="unitType" value={form.unitType} readOnly />
        <input name="purchaseDate" value={form.purchaseDate} onChange={handleChange} type="date" />
        <input name="mrp" value={form.mrp} onChange={handleChange} type="number" placeholder="MRP" />
        <input name="salePrice" value={form.salePrice} onChange={handleChange} type="number" placeholder="Sale Price" />
        <input name="vendor" value={form.vendor} onChange={handleChange} placeholder="Vendor" />
      </div>

      <div className="button-group">
        <button onClick={handleAdd}>Add New</button>
        <button>Save</button>
        <button>Delete</button>
        <button>Cancel</button>
        <button onClick={() => navigate('/')}>Exit</button>
      </div>

      <div className="summary">
        <p>Total Items: {products.length}</p>
        <p>Total Qty: {totalQty}</p>
        <p>Total Purchase: ₹{totalPurchase}</p>
        <p>Grand Purchase: ₹{grandPurchase}</p>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Barcode</th>
            <th>Date</th>
            <th>Name</th>
            <th>MRP</th>
            <th>Purchase Price</th>
            <th>Vendor</th>
            <th>Qty</th>
            <th>Retail Price</th>
            <th>Stock Qty</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.barcode}</td>
              <td>{item.purchaseDate}</td>
              <td>{item.productName}</td>
              <td>{item.mrp}</td>
              <td>{item.purchasePrice}</td>
              <td>{item.vendor}</td>
              <td>{item.quantity}</td>
              <td>{item.salePrice}</td>
              <td>{item.stockQty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseEntry;
