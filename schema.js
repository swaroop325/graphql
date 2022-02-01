const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Employee {
    id: ID
    firstName: String
    lastName: String
    joblevel: Int
  }

  type Query {
    employee: [Employee!]!
    message: String!
  }
`;

module.exports = typeDefs;
