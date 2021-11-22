const mongoose = require('mongoose');
const { Schema } = mongoose;

const VehiculoSchema = new Schema ({
    id: Number,
    idCliente: Number,
    placa: String,
    tipoVehiculo: String,
    clasificacion: String
});

module.exports = mongoose.model('Vehiculo', VehiculoSchema);