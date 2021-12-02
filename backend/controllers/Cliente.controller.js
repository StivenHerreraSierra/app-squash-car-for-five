const ClienteController = {};

const Cliente = require("../models/Cliente.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

ClienteController.crearCliente = async (req, res) => {
  const { nombres, apellidos, tipoDocumento, numeroDocumento, telefono } =
    req.body;

  const pass = await bcrypt.hash(req.body.pass, 10);

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
    const clienteGuardado = await NuevoCliente.save();

    const token = jwt.sign({ _id: clienteGuardado._id }, "Secreta");

    res.json({
      mensaje: "El cliente ha sido creado",
      id: clienteGuardado._id,
      nombres: clienteGuardado.nombres,
      token: token,
      numeroDocumento: clienteGuardado.numeroDocumento,
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
  const tipoDocumento = req.body.tipoDocumento;

  console.log(numeroDocumento, pass, tipoDocumento);

  const cliente = await Cliente.findOne({
    numeroDocumento: numeroDocumento,
    tipoDocumento: tipoDocumento,
  });

  /*  const { nombre, cedula } = req.body;
  const cliente = await Cliente.findOne({ nombre: nombre, cedula });
*/
  if (!cliente) {
    return res.json({
      mensaje: `El nombre o cédula no se encuentra registrado en los clientes`,
    });
  }

  const match = await bcrypt.compare(pass, cliente.pass);

  if (match) {
    const token = jwt.sign({ _id: cliente._id }, "Secreta");
    res.json({
      mensaje: "Bienvenido",
      id: cliente._id,
      nombres: cliente.nombres,
      token: token,
      numeroDocumento: cliente.numeroDocumento,
    });
  } else {
    res.json({
      mensaje: "Credenciales inválidas para clientes",
    });
  }
};

ClienteController.remove = function (req, res) {
  Cliente.findByIdAndDelete({ _id: req.params.id }, function (err) {
    if (err) {
      console.log(err);
      res.json({ mensaje: "Error al eliminar el cliente" });
      return;
    }

    res.json({ mensaje: "El cliente ha sido eliminado" });
  });
};

module.exports = ClienteController;
