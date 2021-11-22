//npm install dotenv
require("dotenv").config();

const mongoose = require("mongoose");

exports.mongoConnect = () => {
  //

  let mongoStringConnection = "";

  if (process.env.DB_URI == undefined) {
    const host = "localhost";
    const port = "27017";
    const db = "hr";
    mongoStringConnection = `mongodb://${host}:${port}/${db}`;
  } else {
    mongoStringConnection = process.env.DB_URI;
  }

  mongoose
    .connect(mongoStringConnection)
    .then(() => console.log("Conexión exitosa a MongoDB"))
    .catch((err) => console.error(err));

  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on(
    "error",
    console.error.bind(console, "Mongodb connection error")
  );
};
