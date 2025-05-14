import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './body.css';

function Buttons() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="background"></div>
      <div className="btn-group">
      
      <Link to="/salereport">
          <button>report</button>
        </Link>
        <Link to="/addsale">
          <button>Add Sale</button>
        </Link>

        <Link to="/addcustomer">
          <button>Add Customer</button>
        </Link>

        <Link to="/addvendor">
          <button>Add Vendor</button>
        </Link>

        <Link to="/addproduct">
          <button>Add Product</button>
        </Link>

        <Link to="/bill">
          <button>Bill Settings</button>
        </Link>

        <Link to="/backup">
          <button>Database Backup</button>
        </Link>
        <Link to="">
        <button onClick={handleExit}>Exit</button>
        </Link>
        

        <div className="sale">
          <h3>Sale</h3>
          <div>
            <p>Today Sale</p>
            <p>Total Sale</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
