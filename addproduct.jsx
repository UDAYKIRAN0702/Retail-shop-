import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Add this
import './addprod.css';

const AddProduct = () => {
  const navigate = useNavigate(); // <-- Add this

  const [formData, setFormData] = useState({
    code: '',
    name: '',
    category: '',
    unit: '',
    purchasePrice: '',
    sellingPrice: '',
    stock: '',
    description: ''
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return alert("Product name is required");
    setProducts([...products, formData]);
    setFormData({
      code: '',
      name: '',
      category: '',
      unit: '',
      purchasePrice: '',
      sellingPrice: '',
      stock: '',
      description: ''
    });
  };

  const handleClear = () => {
    setFormData({
      code: '',
      name: '',
      category: '',
      unit: '',
      purchasePrice: '',
      sellingPrice: '',
      stock: '',
      description: ''
    });
  };

  const handleExit = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="product-container">
      {/* Close Button */}
      <button className="close-button" onClick={handleExit}>X</button>

      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <input name="code" placeholder="Product Code" value={formData.code} onChange={handleChange} />
        <input name="name" placeholder="Product Name *" value={formData.name} onChange={handleChange} required />

        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Groceries">Groceries</option>
        </select>

        <select name="unit" value={formData.unit} onChange={handleChange}>
          <option value="">Select Unit</option>
          <option value="pcs">Pcs</option>
          <option value="kg">Kg</option>
        </select>

        <input name="purchasePrice" placeholder="Purchase Price" value={formData.purchasePrice} onChange={handleChange} />
        <input name="sellingPrice" placeholder="Selling Price" value={formData.sellingPrice} onChange={handleChange} />
        <input name="stock" placeholder="Stock Quantity" value={formData.stock} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />

        <div className="form-buttons">
          <button type="submit">Save Product</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>

      {products.length > 0 && (
        <div className="product-list">
          <h3>Product List</h3>
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Unit</th>
                <th>Purchase Price</th>
                <th>Selling Price</th>
                <th>Stock</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod, idx) => (
                <tr key={idx}>
                  <td>{prod.code}</td>
                  <td>{prod.name}</td>
                  <td>{prod.category}</td>
                  <td>{prod.unit}</td>
                  <td>{prod.purchasePrice}</td>
                  <td>{prod.sellingPrice}</td>
                  <td>{prod.stock}</td>
                  <td>{prod.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
