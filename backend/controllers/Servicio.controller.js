const ServicioController = {};

const Cliente = require('../models/Cliente.model');
const Vehiculo = require('../models/Vehiculo.model');
const Servicio = require('../models/Servicio.model');

ServicioController.registrarServicio = async(servicio) => {
    const { idCliente, nombreCliente, placa, fecha, estado, tipoLavado, costo, observaciones } = servicio;
    const nuevoId = await Servicio.find({}).count() + 1;

    const NuevoServicio = new Servicio ({
        id: nuevoId,
        idCliente,
        nombreCliente,
        idVehiculo: placa,
        fecha,
        estado,
        tipo: tipoLavado,
        costo: 25000,
        observaciones
    });

<<<<<<< HEAD
  

    const idServicio = await Servicio.findOne({ id: id });
    if(idServicio) return res.json({ mensaje: 'Ya se ha registrado un servicio con ese ID' });
=======
    const respuesta = await NuevoServicio.save();

    return respuesta;
}

ServicioController.crearServicio = async(req, res) => {
    const { idCliente, nombreCliente } = req.body.cliente;
    const { fecha, placa, tipoVehiculo, tipoLavado, observaciones } = req.body.servicio;
>>>>>>> 89b7b6453f28a2fb506690e3786bd4a371df7c43

    const clienteServicio = await Cliente.findOne({ numeroDocumento: idCliente });
    if(!clienteServicio) return res.json({ mensaje: 'El número de documento no está registrado' });

    const vehiculo = {
        idCliente, nombreCliente, placa, tipoVehiculo
    };

    const servicio = {
        idCliente, nombreCliente, placa, fecha, estado: 'Pendiente', tipoLavado, observaciones
    };

    await ServicioController.validarVehiculo(vehiculo);
    const respuesta = await ServicioController.registrarServicio(servicio);

    res.json({
        mensaje: 'Servicio registrado',
        respuesta
    });
};

<<<<<<< HEAD
ServicioController.listarTodosServicios = async(req, res) =>{
    const todosServicios =  await Servicio.find();
    if(todosServicios){
         res.json(todosServicios);
    }
    
};
=======
ServicioController.validarVehiculo = async(vehiculo) => {
    const vehiculoEncontrado = await Vehiculo.findOne({ placa: vehiculo.placa });

    if(!vehiculoEncontrado) {
        await Vehiculo.create(vehiculo);
    }
}
>>>>>>> 89b7b6453f28a2fb506690e3786bd4a371df7c43

ServicioController.listarPorCliente = async(req, res) => {
    const idCliente = req.params.idCliente;

    const clienteServicio = await Cliente.findOne({ numeroDocumento: idCliente });
    if(!clienteServicio) return res.json({ mensaje: 'El número de documento no está registrado' });

    const servicios = await Servicio.find({ idCliente: idCliente });

    res.json(servicios);
};

ServicioController.listarPorPlaca = async(req, res) => {
    const cliente = req.params.idCliente;
    const placa = req.params.placa;

    const vehiculoServicio = await Vehiculo.findOne({ idCliente: cliente, idVehiculo: placa });
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