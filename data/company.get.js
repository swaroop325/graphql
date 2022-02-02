const compData = require("./company.json");

exports.getCompanyById = (id) => {
  return compData.find((item) => id === item.id);
};

exports.getCompany = ({ offset, limit }) => {
  if (offset !== undefined && limit != undefined) {
    return new Promise((res) =>
      setTimeout(() => {
        const dataArray = compData.slice(offset, offset + limit);
        res(dataArray), 1000;
      })
    );
  } else {
    return new Promise((res) => setTimeout(() => res(compData), 1000));
  }
};
