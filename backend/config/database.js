//npm install dotenv
require("dotenv").config();

const mongoose = require("mongoose");

/*
const host = "localhost";
const port = "27017";
const db = "hr";
*/

exports.mongoConnect = () => {
    
    
    //const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    const mongoStringConnection = process.env.DB_URI;

    mongoose.connect(mongoStringConnection)
    .then(() => console.log("Conexión exitosa"))
    .catch(err => console.error(err));
    
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind
    (console, "Mongodb connection error"))
}