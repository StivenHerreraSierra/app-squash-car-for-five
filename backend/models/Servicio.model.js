const mongoose = require('mongoose');
const { Schema } = mongoose;

const ServicioSchema = new Schema({
    id: Number,
    idCliente: String, //es el nro de documento.
    nombreCliente: String,
    idVehiculo: String, //es la placa del vehículo.
    fecha: Date,
    estado: String,
    tipo: String,
    costo: Number,
    observaciones: String
});

module.exports = mongoose.model('Servicio', ServicioSchema);