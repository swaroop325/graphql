const compData = require("./company.json");

exports.getCompanyById = (id) => {
  return compData.find((item) => id === item.id);
};
