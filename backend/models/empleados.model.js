const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
  nombres: { type: String, required: true, max: 80 },
  apellidos: { type: String, required: true, max: 80 },
  tipo_documento: { type: String, required: true, max: 5 },
  numero_documento: { type: String, required: true, max: 30 },
  telefono: { type: String, required: true, max: 30 },
});

module.exports = mongoose.model("empleados", EmpleadosSchema);
