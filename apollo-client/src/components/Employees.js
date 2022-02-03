import {
  gql,
  NetworkStatus,
  useLazyQuery,
  useMutation,
  useQuery,
} from "@apollo/client";
import React, { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";
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
  const [getEmp, { loading, error, data, refetch, networkStatus }] =
    useLazyQuery(GET_EMPLOYEES, {
      pollInterval: 2000,
      notifyOnNetworkStatusChange: true,
      errorPolicy: "ignore",
    });

  useEffect(() => {
    getEmp();
  }, []);

  console.log(data);
  console.log("networkStatus : " + networkStatus);
  if (networkStatus === NetworkStatus.refetch) {
    return <b className="text-success">Refetching...</b>;
  }
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
      <button className="btn btn-outline-success m-2" onClick={() => getEmp()}>
        Refetch
      </button>
      <AddEmployee />
      <hr />
      {selected && <EmployeeDetails empId={selected} />}
    </>
  );
}
