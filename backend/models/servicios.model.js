const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiciosSchema = new Schema({});

module.exports = mongoose.model("servicios", ServiciosSchema);
