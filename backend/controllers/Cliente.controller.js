const ClienteController = {};

const Cliente = require('../models/Cliente.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

ClienteController.crearCliente = async(req, res) => {
    const {nombres, apellidos, tipoDocumento, numeroDocumento, telefono} = req.body;

    const NuevoCliente = new Cliente ({
        nombres,
        apellidos,
        tipoDocumento,
        numeroDocumento,
        telefono
    });

    const cedulaCliente = await Cliente.findOne({ numeroDocumento: numeroDocumento });

    if(cedulaCliente) {
        res.json({
            mensaje: 'El número de cédula ya existe'
        });
    } else {
        const token = jwt.sign({ _id: NuevoCliente._id }, "Secreta" );

        await NuevoCliente.save();

        res.json({
            mensaje: "Bienvenido",
            id: NuevoCliente._id,
            nombre: NuevoCliente.nombre,
            token: token
        })
    }
};

ClienteController.login = async(req, res) => {
    const { nombre, cedula } = req.body;
    const cliente = await Cliente.findOne({ nombre: nombre, cedula });

    if(!cliente) {
        return res.json({
            mensaje: `El nombre o cédula no se encuentra registrado en los clientes`
        });
    } else {
        const token = jwt.sign({ _id: cliente._id }, 'Secreta');
        res.json({
            mensaje: 'Bienvenido',
            id: cliente._id,
            nombre: cliente.nombre,
            token: token
        });
    }
}

module.exports = ClienteController;