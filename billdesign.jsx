import React from 'react';
import { useNavigate } from 'react-router-dom';
import './billdisign.css';

const InvoiceA4GST = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  const invoiceData = {
    invoiceNumber: 'GST248-29185',
    invoiceDate: '19 December 2024',
    shopName: 'Hargun Shop',
    address: 'Main Road, Haridwar (U.K.)',
    gstin: '05TBAK2435E1Z8',
    contact: '8445495024',
    customerName: 'Rahul',
    customerMobile: '9999999999',
    items: [
      { description: 'HARGUN SHOP SIMPLE GST SOFTWARE', qty: 1, rate: 499, cgst: 0, sgst: 0, total: 499 },
      { description: 'THERMAL PRINTER 58MM', qty: 1, rate: 2499, cgst: 224.91, sgst: 224.91, total: 2948.82 },
      { description: 'HARGUN SHOP DUPLICATE PHOTO PRINT', qty: 1, rate: 200, cgst: 18, sgst: 18, total: 236 },
    ],
    grandTotal: 3683.82,
    amountInWords: 'Three Thousand Six Hundred Eighty-Three and Eighty-Two Only'
  };

  return (
    <div className="invoice-a4">
      <button className="close-button" onClick={handleClose}>❌</button>

      <h2>{invoiceData.shopName}</h2>
      <p>{invoiceData.address} | GSTIN: {invoiceData.gstin}</p>
      <p>Contact: {invoiceData.contact}</p>

      <div className="invoice-meta">
        <p><strong>Invoice No:</strong> {invoiceData.invoiceNumber}</p>
        <p><strong>Invoice Date:</strong> {invoiceData.invoiceDate}</p>
        <p><strong>Customer:</strong> {invoiceData.customerName} | {invoiceData.customerMobile}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>CGST</th>
            <th>SGST</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{item.description}</td>
              <td>{item.qty}</td>
              <td>{item.rate}</td>
              <td>{item.cgst.toFixed(2)}</td>
              <td>{item.sgst.toFixed(2)}</td>
              <td>{item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="invoice-summary">
        <p><strong>Amount in Words:</strong> {invoiceData.amountInWords}</p>
        <p><strong>Grand Total: ₹{invoiceData.grandTotal.toFixed(2)}</strong></p>
      </div>

      <div className="signature">
        <p>For {invoiceData.shopName}</p>
        <p>Authorized Signature</p>
      </div>
    </div>
  );
};

export default InvoiceA4GST;
