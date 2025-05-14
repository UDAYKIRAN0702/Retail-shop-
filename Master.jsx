import React from 'react';
import './master.css';

function Topbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src='/path/to/logo.png' alt="Logo" className="logo" />

        <div className="dropdown">
          <button className="dropbtn">Master</button>
          <div className="dropdown-content">
            <a href="/addproduct">Products</a>
            <a href="#">Add Logo</a>
            <a href="#">Shipping Master</a>
            <a href="#">Payment Type</a>
            <a href="#">Unit Master</a>
            <a href="addcustomer">Customers</a>
            <a href="addvendor">Vendors</a>
            <a href="bill">Bill Setting</a>
            <a href="backup">Database Back Up</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Report</button>
          <div className="dropdown-content">
          
          <a href="/salereport">Sale Report</a>
        
            
            
          </div>
        </div>
      </div>

      <div className="dropdown profile-icon">
        < a href='' className='logo'>🤵🏻</a>
        <div className="dropdown-content">
          <a href="#logout">Log out</a>
        
        </div>
      </div>
    </div>
  );
}

export default Topbar;
