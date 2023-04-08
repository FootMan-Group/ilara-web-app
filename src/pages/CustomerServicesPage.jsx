import React, { useState, useEffect } from 'react';
import CustomerHeader from "./common/CustomerHeader";

function CustomerServicesPage() {
  const [services, setServices] = useState([]);
  const customerId = localStorage.getItem('customer_id');

  useEffect(() => {
    fetch(`http://localhost:9000/services/customer/${customerId}`)
      .then(response => response.json())
      .then(data => setServices(data));
  }, [customerId]);

  return (
    <div>
      <CustomerHeader />
      <h1>Customer Services</h1>
      <table>
        <thead>
          <tr>
            <th>Service Ref</th>
            <th>Product</th>
            <th>Units</th>
            <th>Total Cost</th>
            <th>Balance</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service.id}>
              <td>{service.service_ref}</td>
              <td>{service.productID.product}</td>
              <td>{service.units}</td>
              <td>{service.total_cost}</td>
              <td>{service.balance}</td>
              <td>{service.status ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerServicesPage;
