const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema(
  {
    
    name: {
      type: String,
      required: [true, "Please add the user name"],
    },
    job: {
      type: String
    }
  });

module.exports = mongoose.model("employees", employeeSchema, "employees");

