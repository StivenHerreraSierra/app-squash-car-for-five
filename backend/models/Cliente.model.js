const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema ({
    nombres: String,
    apellidos: String,
    tipoDocumento: String,
    numeroDocumento: String,
    telefono: String
});

module.exports = mongoose.model('Cliente', ClienteSchema);