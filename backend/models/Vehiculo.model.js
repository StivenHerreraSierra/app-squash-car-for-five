const mongoose = require('mongoose');
const { Schema } = mongoose;

const VehiculoSchema = new Schema ({
    idCliente: String, //es el nro de documento.
    placa: String,
    tipoVehiculo: String,
    clasificacion: String
});

module.exports = mongoose.model('Vehiculo', VehiculoSchema);