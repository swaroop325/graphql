const { welcomeMessage, empData } = require("./emp.data");
const { compData } = require("./comp.data");

const resolver = {
  Query: {
    employee: () => empData,
    employeeById: (parent, args, context, info) =>
      empData.find((i) => i.id == args.id),
    employeeByName: (parent, args, context, info) =>
      empData.find((i) => i.firstName.toLowerCase() == args.name.toLowerCase()),
    getFullName: (parent, args, context, info) => {
      let employee = empData.find(
        (i) => i.firstName.toLowerCase() == args.name.toLowerCase()
      );
      return employee.firstName + " " + employee.lastName;
    },
    message: () => welcomeMessage,
  },
  // Nested query
  Employee: {
    fullName: (parent, args, context, info) => {
      return parent.firstName + " " + parent.lastName;
    },
    company: (parent, args, context, info) =>
      compData.find((item) => parent.companyId === item.id),
  },

  Company: {
    employee: (parent, args, context, info) =>
      empData.filter((item) => parent.id === item.companyId),
  },
};

module.exports = resolver;
