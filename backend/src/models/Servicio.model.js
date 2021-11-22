const mongoose = require('mongoose');
const { Schema } = mongoose;

const ServicioSchema = new Schema({
    id: Number,
    idCliente: Number,
    idVehiculo: Number,
    fecha: Date,
    estado: String,
    costo: Number,
    observaciones: String
});

module.exports = mongoose.model('Servicio', ServicioSchema);