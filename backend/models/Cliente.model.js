const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClienteSchema = new Schema({
  nombres: { type: String, required: true, max: 80 },
  apellidos: { type: String, required: true, max: 80 },
  tipoDocumento: { type: String, required: true, max: 5 },
  numeroDocumento: { type: Number, required: true },
  telefono: { type: Number, required: false },
  pass: { type: String, required: true, max: 128 },
});

module.exports = mongoose.model("Cliente", ClienteSchema);
