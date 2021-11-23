const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
  nombres: { type: String, required: true, max: 80 },
  apellidos: { type: String, required: true, max: 80 },
  tipoDocumento: { type: String, required: true, max: 5 },
  numeroDocumento: { type: String, required: true, max: 30 },
  telefono: { type: String, required: true, max: 30 },
  pass: { type: String, required: true, max: 128 }
});

module.exports = mongoose.model("empleados", EmpleadosSchema);
