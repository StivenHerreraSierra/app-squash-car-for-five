const VehiculoController = {};

const Cliente = require('../models/Cliente.model');
const Vehiculo = require('../models/Vehiculo.model');

VehiculoController.crearVehiculo = async(req, res) => {
    const { idCliente, placa, tipoVehiculo, clasificacion } = req.body;

    const nuevoVehiculo = new Vehiculo({
        idCliente,
        placa,
        tipoVehiculo,
        clasificacion
    });

    const clienteVehiculo = await Cliente.findOne({ numeroDocumento: idCliente });
    if(!clienteVehiculo) {
        return res.json({
            mensaje: `El número de documento no está registrado`
        });
    }

    const placaVehiculo = await Vehiculo.findOne({ placa: placa });

    if(placaVehiculo) {
        res.json({
            mensaje: 'La placa del vehículo ya está registrada'
        });
    } else {
        const respuesta = await nuevoVehiculo.save();

        res.json({
            mensaje: "Vehículo registrado",
            respuesta
        });
    }
};

VehiculoController.listarPorCliente = async(req, res) => {
    const idCliente = req.params.idCliente;

    const cliente = await Cliente.findOne({ numeroDocumento: idCliente });
    
    if(!cliente) {
        return res.json({
            mensaje: 'El número de documento no está registrado'
        });
    }

    const vehiculos = await Vehiculo.find({ idCliente: idCliente });

    res.json(vehiculos);
};

VehiculoController.eliminar = async(req, res) => {
    const placa = req.params.placa;

    const respuesta = await Vehiculo.deleteOne({ placa: placa });

    if(respuesta.deletedCount > 0) {
        res.json({
            mensaje: 'Vehículo eliminado'
        });
    } else {
        res.json({
            mensaje: 'No se encontró el vehículo'
        });
    }
};

VehiculoController.actualizar = async(req, res) => {
    const placa = req.params.placa;

    await Vehiculo.updateOne({ placa: placa }, req.body);

    res.json({
        mensaje: 'Vehículo actualizado'
    })
};

module.exports = VehiculoController;