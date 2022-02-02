const mongoose = require("mongoose");
// mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;
const URL = "mongodb://localhost:27017/graphql";
const collectionModels = {};

const EmployeeSchema = new Schema({
  id: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  joblevel: { type: Number, required: true },
  companyId: { type: String, required: true },
});

exports.getEmployeeModel = async () => {
  try {
    const db = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (db) {
      return db.model("Employee", EmployeeSchema);
    }
  } catch (err) {
    throw err;
  }
};
