import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getCustomers } from '../../data/customersData';
import { getEmployees } from '../../data/employeeData';
import { createServiceTicket } from '../../data/serviceTicketsData';

const initialState = {
  Id: '',
  CustomerId: 0,
  EmployeeId: 0,
  Description: '',
  
};

export default function CreateTicket() {
  const [formInput, setFormInput] = useState(initialState);
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [emergency, setEmergency] = useState(false);

 
  useEffect(() => {
    getCustomers().then((data) => {
      setCustomers(data);
    });

    getEmployees().then((data) => {
      setEmployees(data);
    });

  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.warn("E: ", e.target.value);
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.warn(e);
    e.preventDefault();
    const payload = { ...formInput, Emergency: {emergency} };
    console.warn("Payload: ", payload);
    //createServiceTicket(payload);
  }

   const handleCheckBox = (e) => {
    console.warn("checkbox: ", e.target);
    setEmergency(e.target.checked);
  }

  return (
    <>
    <h3 className="w-50 mx-auto">Submit a Ticket</h3>;
      <Form className="w-50 mx-auto" onSubmit={handleSubmit}>

    <Form.Label className="mt-3 mb-2 fw-medium">Customer</Form.Label>
    <Form.Select
     aria-label="select customer"
     name="CustomerId"
     onChange={handleChange}
     value={formInput.CustomerId}>
      <option value="">Select Customer</option>
          {
            customers.map((customer) => (
              <option
                key={customer.id}
                value={customer.id}
              >
                {customer.name}
              </option>
            ))
          }
    </Form.Select>

    <Form.Label className="mt-3 mb-2 fw-medium">Employee</Form.Label>
    <Form.Select
     aria-label="select customer"
     name="EmployeeId"
     onChange={handleChange}
     value={formInput.EmployeeId}>
      <option value="">Select Employee</option>
          {
            employees.map((employee) => (
              <option
                key={employee.id}
                value={employee.id}
              >
                {employee.name}
              </option>
            ))
          }
    </Form.Select>

    <Form.Group className="mb-3" controlId="ControlInput1">
        <Form.Label className="mt-3 mb-2 fw-medium">Description</Form.Label>
        <Form.Control
          type="text"
          name="Description"
          onChange={handleChange}
          value={formInput.Description} />
      </Form.Group>

    <Form.Label className="mt-3 mb-2 me-3 fw-medium">Emergency</Form.Label>
      <input
        type="checkbox"
        name="Emergency"
        value={emergency}
        onChange={handleCheckBox}
        
      />
  
    <div className="mt-4">
      <Button className="dark-button" type="submit">
        Submit
      </Button>
        
    </div>
        
      </Form>
    </>
  );
};
