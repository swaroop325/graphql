const { welcomeMessage, empData } = require("./data/emp.data");
const { getCompanyById, getCompany } = require("./data/company.get");
const { setDB, getEmployeeList } = require("./db/employee");

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
    getCompany: (parent, args, context, info) => getCompany(args),
    message: () => welcomeMessage,
    setupDB: () => setDB(),
    fetchAll: () => getEmployeeList(),
  },
  // Nested query
  Employee: {
    fullName: (parent, args, context, info) => {
      return parent.firstName + " " + parent.lastName;
    },
    company: (parent, args, context, info) => getCompanyById(parent.companyId),
  },

  Company: {
    employee: (parent, args, context, info) =>
      empData.filter((item) => parent.id === item.companyId),
  },

  Mutation: {
    updateMessage: (parent, args, context, info) => {
      return "Mutation done successfully " + args.msg;
    },
  },
};

module.exports = resolver;
