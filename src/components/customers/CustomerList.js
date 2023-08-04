import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getCustomers } from '../../data/customersData';
import { Link } from "react-router-dom";

export default function CustomerList() {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    getCustomers().then(setCustomer);
  }, []);


  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
        <th></th>
        </tr>
      </thead>
      <tbody >
        {customer.map((t) => (
          <tr key={`customer-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.name}</td>
                     
            <td>
              <Link to={`${t.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
