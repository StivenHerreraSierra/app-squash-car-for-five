const ClienteController = {};

const Cliente = require("../models/Cliente.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

ClienteController.crearCliente = async (req, res) => {
  const { nombres, apellidos, tipoDocumento, numeroDocumento, telefono, pass } =
    req.body;

  const NuevoCliente = new Cliente({
    nombres,
    apellidos,
    tipoDocumento,
    numeroDocumento,
    telefono,
    pass,
  });

  const cedulaCliente = await Cliente.findOne({
    numeroDocumento: numeroDocumento,
  });

  if (cedulaCliente) {
    res.json({
      mensaje: "El número de cédula ya existe",
    });
  } else {
    const token = jwt.sign({ _id: NuevoCliente._id }, "Secreta");

    await NuevoCliente.save();

    res.json({
      mensaje: "Bienvenido",
      id: NuevoCliente._id,
      nombre: NuevoCliente.nombre,
      token: token,
    });
  }
};

ClienteController.obtener = async (req, res) => {
  const documento = req.params.documento;

  const documentoCliente = await Cliente.findOne({
    numeroDocumento: documento,
  });
  if (!documentoCliente)
    return res.json({ mensaje: "El número de documento no está registrado" });

  res.json(documentoCliente);
};

ClienteController.find = async function (req, res) {
  const clientes = await Cliente.find();
  res.json(clientes);
};

ClienteController.login = async (req, res) => {
  const numeroDocumento = req.body.numeroDocumento;
  const pass = req.body.pass;

  const cliente = await Cliente.findOne({
    numeroDocumento: numeroDocumento,
  });
  /*  const { nombre, cedula } = req.body;
  const cliente = await Cliente.findOne({ nombre: nombre, cedula });
*/
  if (!cliente) {
    return res.json({
      mensaje: `El nombre o cédula no se encuentra registrado en los clientes`,
    });
  }

  if (pass === cliente.pass) {
    const token = jwt.sign({ _id: cliente._id }, "Secreta");
    res.json({
      mensaje: "Bienvenido",
      id: cliente._id,
      nombre: cliente.nombre,
      token: token,
    });
    console.log("aqui todo Ok");
  } else {
    res.json({
      mensaje: "Credenciales inválidas para clientes",
    });
    console.log("aqui fallo pass");
  }
};

module.exports = ClienteController;
