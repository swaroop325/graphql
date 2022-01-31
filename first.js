const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const port = 4000;
const app = express();
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    student: String
    employee: String
  }
`;

const resolvers = {
  Query: {
    student: () => "hello student",
    employee: () => "Hello employee",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log("running");
});
