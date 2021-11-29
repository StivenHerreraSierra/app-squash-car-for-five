const mongoose = require('mongoose');
const { Schema } = mongoose;

const VehiculoSchema = new Schema ({
    idCliente: String, //es el nro de documento.
    nombreCliente: String,
    placa: String,
    tipoVehiculo: String,
});

module.exports = mongoose.model('Vehiculo', VehiculoSchema);