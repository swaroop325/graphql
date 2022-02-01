const { welcomeMessage, empData } = require("./emp.data");

const resolver = {
  Query: {
    employee: () => empData,
    employeeById: (parent, args, context, info) => {
      return [empData.find((i) => i.id == args.id)];
    },
    employeeByName: (parent, args, context, info) => {
      return [
        empData.find(
          (i) => i.firstName.toLowerCase() == args.name.toLowerCase()
        ),
      ];
    },
    message: () => welcomeMessage,
  },
};

module.exports = resolver;
