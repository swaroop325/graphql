const empData = require("../data/employee.json");
const EmployeeModel = require("./connection").getEmployeeModel;

exports.setDB = async () => {
  const empModel = await EmployeeModel();
  await empModel.deleteMany({});
  const insertedEmp = await empModel.insertMany(empData);
  if (insertedEmp.length > 0) {
    return "DB setup done";
  } else {
    return "No data inserted";
  }
};

exports.getEmployeeList = async () => {
  try {
    const empModel = await EmployeeModel();
    const empArray = await empModel.find({});
    return empArray;
  } catch (err) {
    console.log("cannot fetch");
    throw err;
  }
};
