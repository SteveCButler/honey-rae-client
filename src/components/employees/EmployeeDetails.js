import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployeeById } from '../../data/employeeData';

export default function EmployeeDetails() {
  const { id } = useParams();
 
  const [employee, setEmployee] = useState(null);

  //add useEffect here to get the customer details from the API
useEffect(() =>  {
  getEmployeeById(id).then(data => setEmployee(data))
}, []);

  if (!employee) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr></tr>
        <tr>
          <th scope="row">Name</th>
          <td>{employee.name}</td>
        </tr>
        <tr>
          <th scope="row">Specialty</th>
          <td>{employee.specialty}</td>
        </tr>
      
      </tbody>
    </Table>
  );
}
