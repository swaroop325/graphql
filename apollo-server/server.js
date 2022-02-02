const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const port = 4000;
const app = express();
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = require("./schema");
const resolvers = require("./resolver");

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log("running");
});
