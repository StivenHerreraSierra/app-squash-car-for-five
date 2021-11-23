//npm install dotenv
require("dotenv").config();

const mongoose = require("mongoose");

exports.mongoConnect = () => {

  const mongoStringConnection = `mongodb+srv://admin:admin@cluster0.1ymqe.mongodb.net/Suashcarforfive?retryWrites=true&w=majority`;

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
