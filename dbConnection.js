const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL;

const CONNECTION_STRING =dbUrl

const connectDb = async () => {
  try {
    console.log(CONNECTION_STRING);

    const connect = await mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true
    });

    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;

