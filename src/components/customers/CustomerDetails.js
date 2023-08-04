import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getCustomerById } from '../../data/customersData';

export default function CustomerDetails() {
  const { id } = useParams();
 
  const [customer, setCustomer] = useState(null);

  //add useEffect here to get the customer details from the API
useEffect(() =>  {
  getCustomerById(id).then(data => setCustomer(data))
}, []);

  if (!customer) {
    return null;
  }

  return (
    <Table>
      <tbody>
       <tr>
        <th scope="row">ID</th>
        <td>{customer.id}</td>
       </tr>
        <tr>
          <th scope="row">Customer</th>
           <td>{customer.name}</td>
        </tr>
        <tr>
          
          
        </tr>
        <tr>
          <th scope="row">Address</th>
          <td>{customer.address}</td>
        </tr>
        
      </tbody>
    </Table>
  );
}
