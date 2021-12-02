const mongoose = require('mongoose');
const { Schema } = mongoose;

const ServicioSchema = new Schema({
    id: Number,
    idCliente: String, //es el nro de documento.
    nombreCliente: String,
    idVehiculo: String, //es la placa del vehículo.
    fecha: String,
    estado: String,
    tipo: String,
    costo: Number,
    observaciones: String,
    empleadoEncargado: String
});

module.exports = mongoose.model('Servicio', ServicioSchema);