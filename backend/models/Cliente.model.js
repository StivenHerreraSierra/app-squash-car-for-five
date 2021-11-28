const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClienteSchema = new Schema({
  nombres: { type: String, required: true, max: 80 },
  apellidos: { type: String, required: true, max: 80 },
  tipoDocumento: { type: String, required: true, max: 5 },
  numeroDocumento: { type: Number, required: true, max: 30 },
  direccion: { type: String, required: false, max: 100 },
  ciudad: { type: String, required: false, max: 30 },
  departamento: { type: String, required: false, max: 30 },
  telefono: { type: Number, required: true, max: 30 },
  pass: { type: String, required: true, max: 128 },
});

module.exports = mongoose.model("Cliente", ClienteSchema);
