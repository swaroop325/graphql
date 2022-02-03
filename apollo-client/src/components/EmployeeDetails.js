import { useQuery, gql } from "@apollo/client";
import React from "react";

const GET_MSG = gql`
  query Sample($empId: ID!) {
    employeeById(id: $empId) {
      fullName
      id
      joblevel
    }
  }
`;

export default function EmployeeDetails({ empId }) {
  const { loading, error, data } = useQuery(GET_MSG, {
    variables: { empId },
  });
  console.table(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  const employee = data && !loading && !error && data.employeeById;

  return (
    <div className="row">
      {employee && (
        <div className="col-6 offset-3 card">
          <h3>Showing Details for {empId}</h3>
          <table className="table table-info">
            <tbody>
              <tr>
                <th>Name: </th>
                <td>{employee.fullName}</td>
              </tr>
              <tr>
                <th>JobLevel: </th>
                <td>{employee.joblevel}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
