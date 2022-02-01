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
    getFullName: (parent, args, context, info) => {
      let employee = empData.find(
        (i) => i.firstName.toLowerCase() == args.name.toLowerCase()
      );
      console.log(employee)
      return employee.firstName + " " + employee.lastName;
    },
    message: () => welcomeMessage,
  },
};

module.exports = resolver;
