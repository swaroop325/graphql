const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const port = 4000;
const app = express();
const { ApolloServer, gql } = require("apollo-server-express");

const StudentData = [
  {
    id: "S01",
    name: "Swaroop",
  },
  {
    id: "S02",
    name: "karthik",
  },
];

const typeDefs = gql`
  type Query {
    student: [Student]
    employee: String
  }
  type Student {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Query: {
    student: () => StudentData,
    employee: () => "Hello employee",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log("running");
});
