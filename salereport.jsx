import React, { useState } from 'react';
import './salereport.css';

const ReportForm = () => {
  const [saleReportDates, setSaleReportDates] = useState({ from: '', to: '' });
  const [productReport, setProductReport] = useState({ name: '', from: '', to: '' });
  const [laser, setLaser] = useState(false);

  const handleSaleChange = (e) => {
    setSaleReportDates({ ...saleReportDates, [e.target.name]: e.target.value });
  };

  const handleProductChange = (e) => {
    setProductReport({ ...productReport, [e.target.name]: e.target.value });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="report-container">
      <div className="header">
        <h3>Sale Reports</h3>
        <span className="new-badge">NEW</span>
      </div>

      <div className="section">
        <h4>Sale Report</h4>
        <label>
          <input type="checkbox" checked={laser} onChange={() => setLaser(!laser)} />
          Laser Report
        </label>
        <div className="date-range">
          <div>
            <label>From</label>
            <input type="date" name="from" value={saleReportDates.from} onChange={handleSaleChange} />
          </div>
          <div>
            <label>To</label>
            <input type="date" name="to" value={saleReportDates.to} onChange={handleSaleChange} />
          </div>
        </div>
        <div className="btn-row">
          <button className="btn btn-green" onClick={handlePrint}>🖨 Print</button>
          <button className="btn btn-red">Exit</button>
        </div>
      </div>

      <hr />

      <div className="section">
        <h4>Product Wise Profit</h4>
        <label>Name</label>
        <input type="text" name="name" value={productReport.name} onChange={handleProductChange} />

        <div className="date-range">
          <div>
            <label>From</label>
            <input type="date" name="from" value={productReport.from} onChange={handleProductChange} />
          </div>
          <div>
            <label>To</label>
            <input type="date" name="to" value={productReport.to} onChange={handleProductChange} />
          </div>
        </div>
        <button className="btn btn-green" onClick={handlePrint}>🖨 Print</button>
      </div>

      
    </div>
  );
};

export default ReportForm;
