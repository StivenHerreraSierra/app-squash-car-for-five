const mongoose = require('mongoose');
const { Schema } = mongoose;

const ServicioSchema = new Schema({
    id: String,
    idCliente: String, //es el nro de documento.
    idVehiculo: String, //es la placa.
    fecha: Date,
    estado: String,
    costo: Number,
    observaciones: String
});

module.exports = mongoose.model('Servicio', ServicioSchema);