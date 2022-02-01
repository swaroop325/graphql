const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    employee: [Employee]
    employeeById(id: ID!): Employee
    employeeByName(name: String): Employee
    getFullName(name: String): String
    message: String!
    companies: [Company]
  }

  type Employee {
    id: ID
    firstName: String
    lastName: String
    fullName: String
    joblevel: Int
    company: Company
  }

  type Company {
    id: ID!
    name: String
    description: String
    employee: [Employee]
  }
`;

module.exports = typeDefs;
