const Empleado = require("../models/empleados.model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let empleado = new Empleado({
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    tipoDocumento: req.body.tipoDocumento,
    numeroDocumento: req.body.numeroDocumento,
    telefono: req.body.telefono,
    pass: req.body.pass

  });

  empleado.save(function (err) {
    if (err) {
      console.log = false;
      response.exito = false;
      response.msg = "Error al guardar el empleado";
      res.json(response);
      return;
    }

    response.exito = true;
    response.msg = "El empleado se guardó correctamente";
    res.json(response);
  });
};

exports.find = function (req, res) {
  Empleado.find(function (err, empleados) {
    res.json(empleados);
  });
};

exports.findOne = function (req, res) {
  Empleado.findOne({ _id: req.params.id }, function (err, empleado) {
    res.json(empleado);
  });
};

exports.remove = function (req, res) {
  Empleado.findByIdAndDelete({ _id: req.params.id }, function (err) {
    if (err) {
      console.log(err);
      response.exito = false;
      response.msg = "Error al eliminar el empleado";
      res.json(response);
      return;
    }

    response.exito = true;
    response.msg = "El empleado ha sido eliminado";
    res.json(response);
  });
};


exports.login = function (req, res) {
  const numeroDocumentoEmpleado = req.body.numeroDocumento;
  const empleado = Empleado.findOne({ numeroDocumento: numeroDocumentoEmpleado });  

  const match = bcrypt.compare(numeroDocumentoEmpleado, empleado.numeroDocumento);

  if (match) {
    const token = jwt.sign({ _id: empleado._id }, "Secreta");
    res.json({
      mensaje: "Bienvenido",
      id: empleado._id,
      nombres: empleado.nombres,
      apellidos: empleado.apellidos, 
      token: token,
    });
  } else {
    res.json({
      mensaje: "Credenciales inválidas",
    });
  }
};
