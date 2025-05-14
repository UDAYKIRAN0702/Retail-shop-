import React from 'react';
import './App.css';
import Header from './assets/retail/Master';
import Body from './assets/retail/Header';
import Footer from './assets/retail/footer';
import AddProduct from './assets/retail/addproduct';
import AddVendor from './assets/retail/addvendor';
import AddCustomer from './assets/retail/addcustomer';
import ReportForm from './assets/retail/salereport';
import BillSettings from './assets/retail/billsitting/bill';
import Backup from './assets/retail/database';
import Bsitting from './assets/retail/billsitting/billsit';
import PurchaseEntry from './assets/retail/addsale';
import InvoiceA4GST from './assets/retail/billsitting/billdesign';
import DefaultSettings from './assets/retail/billsitting/defaultsit';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReportForm1 from '../invoiceform';
import SalesReport from '../report/salereport';




function App() {
  return (
    <div>
      <Header/>
      <Body/>
      <ReportForm1/>
      <Footer/>
      
      <div>
      <AddProduct/>
<PurchaseEntry/>
      <AddVendor/>
      <AddCustomer/>
      <ReportForm/>
      
      <BillSettings/>
     <Bsitting/>
     
      <DefaultSettings/>
     
    
      
      
      <Backup/>
      
      <SalesReport/>
      </div>
      <Routes>
        
        <Route path="/Header" element={<ReportForm/>} />
        <Route path="/billdesign" element={<InvoiceA4GST/>} />
        

      </Routes>
    </div>
  );
}

export default App;
