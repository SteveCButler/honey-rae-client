import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getEmployees } from '../../data/employeeData';
import { Link } from "react-router-dom";

export default function EmployeeList() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    getEmployees().then(setEmployee);
  }, []);


  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {employee.map((t) => (
          <tr key={`employee-${t.id}`}>
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
