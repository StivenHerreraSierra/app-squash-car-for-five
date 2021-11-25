const ServicioController = {};

const Cliente = require('../models/Cliente.model');
const Vehiculo = require('../models/Vehiculo.model');
const Servicio = require('../models/Servicio.model');

ServicioController.crearServicio = async(req, res) => {
    const { id, idCliente, nombreCliente, idVehiculo, fecha, estado, tipo, costo, observaciones } = req.body;

    const NuevoServicio = new Servicio ({
        id,
        idCliente,
        nombreCliente,
        idVehiculo,
        fecha,
        estado,
        tipo,
        costo,
        observaciones
    });

    const idServicio = await Servicio.findOne({ id: id });
    if(idServicio) return res.json({ mensaje: 'Ya se ha registrado un servicio con ese ID' });

    const clienteServicio = await Cliente.findOne({ numeroDocumento: idCliente });
    if(!clienteServicio) return res.json({ mensaje: 'El número de documento no está registrado' });

    const vehiculoServicio = await Vehiculo.findOne({ placa: idVehiculo });
    if(!vehiculoServicio) return res.json({ mensaje: 'La placa del vehículo no está registrada' });

    const respuesta = await NuevoServicio.save();

    res.json({
        mensaje: 'Servicio registrado',
        respuesta
    });
};

ServicioController.listarPorCliente = async(req, res) => {
    const idCliente = req.params.idCliente;

    const clienteServicio = await Cliente.findOne({ numeroDocumento: idCliente });
    if(!clienteServicio) return res.json({ mensaje: 'El número de documento no está registrado' });

    const servicios = await Servicio.find({ idCliente: idCliente });

    res.json(servicios);
};

ServicioController.listarPorPlaca = async(req, res) => {
    const placa = req.params.placa;

    const vehiculoServicio = await Vehiculo.findOne({ idVehiculo: placa });
    if(!vehiculoServicio) return res.json({ mensaje: 'La placa no está registrada' });

    const servicios = await Servicio.find({ idVehiculo: placa });

    res.json(servicios);
};

ServicioController.eliminar = async(req, res) => {
    const id = req.params.id;

    const respuesta = await Servicio.deleteOne({ id: id });

    if(respuesta.deletedCount > 0) res.json({ mensaje: 'Servicio eliminado' });
    else res.json({ mensaje: 'No se encontró el servicio' });
};

ServicioController.actualizar = async(req, res) => {
    const id = req.params.id;

    const idServicio = await Servicio.findOne({ id: id });

    if(!idServicio) return res.json({ mensaje: 'No se encontró el servicio' });

    const respuesta = await Servicio.updateOne({ id: id }, req.body);

    res.json({
        mensaje: 'Servicio actualizado',
        respuesta
    });
}

module.exports = ServicioController;