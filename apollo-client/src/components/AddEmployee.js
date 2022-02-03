import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

export default function AddEmployee() {
  const initialForm = {
    id: "S06",
    firstName: "dummy",
    lastName: "dummy",
    joblevel: 1,
  };
  const ADD_EMPLOYEE = gql`
    mutation (
      $id: String!
      $firstName: String!
      $lastName: String!
      $joblevel: Int!
    ) {
      addEmployee(
        id: $id
        firstName: $firstName
        lastName: $lastName
        joblevel: $joblevel
      ) {
        id
        fullName
      }
    }
  `;
  const [addEmployee, { loading, error, data }] = useMutation(ADD_EMPLOYEE);
  console.log(data);

  return (
    <button
      className="btn btn-outline-success m-2"
      onClick={() => addEmployee({ variables: initialForm })}
    >
      Add Emp
    </button>
  );
}
