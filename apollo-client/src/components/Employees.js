import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import EmpCard from "./EmpCard";
import EmployeeDetails from "./EmployeeDetails";

const GET_EMPLOYEES = gql`
  query Sample {
    employee {
      fullName
      id
      joblevel
    }
    getRandom
  }
`;

export default function Employees() {
  const [selected, setSelected] = useState("");
  const { loading, error, data } = useQuery(GET_EMPLOYEES, {
    pollInterval: 500,
  });
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const employee = data && !loading && !error && data.employee;
  return (
    <>
      <h2>Employee</h2>
      <p>View all employee</p>
      <div className="row">
        {employee &&
          employee.map((emp) => (
            <EmpCard
              onCardClick={(id) => setSelected(id)}
              key={emp.id}
              emp={emp}
            />
          ))}
      </div>
      <hr />
      {selected && <EmployeeDetails empId={selected} />}
    </>
  );
}
