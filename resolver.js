const { welcomeMessage, empData } = require("./emp.data");

const resolver = {
  Query: {
    employee: () => empData,
    message: () => welcomeMessage,
  },
};

module.exports = resolver;
