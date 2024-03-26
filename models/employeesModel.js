const mongoose = require("mongoose"); //引入mongoose组件
const employeeSchema = mongoose.Schema(
  {
    
    name: {
      type: String, //存储类型string
      required: [true, "Please add the user name"], //required:true 表示改字段为必填项
    },
    job: {
      type: String
    }
  });

module.exports = mongoose.model("employees", employeeSchema, "employees");

