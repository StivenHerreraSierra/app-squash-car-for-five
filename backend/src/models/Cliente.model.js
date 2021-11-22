const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema ({
    id: Number,
    nombres: String,
    apellido: String,
    tipoDocumento: String,
    numeroDocumento: String,
    telefono: String
});

module.exports = mongoose.model('Cliente', ClienteSchema);