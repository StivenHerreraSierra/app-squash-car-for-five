const Empleado = require("../models/empleados.model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let response = {
  msg: "",
  exito: false,
};

exports.create = async function (req, res) {
  const empleado = new Empleado({
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    tipoDocumento: req.body.tipoDocumento,
    numeroDocumento: req.body.numeroDocumento,
    telefono: req.body.telefono,
    pass: req.body.pass,
  });

  const cedulaEmpleado = await Empleado.findOne({
    numeroDocumento: req.body.numeroDocumento,
  });

  if (cedulaEmpleado) {
    res.json({
      mensaje: "El número de cédula ya existe",
    });
  } else {
    empleado.pass = await bcrypt.hash(req.body.pass, 10);

    empleado.save(function (err) {
      if (err) {
        console.log(err);
        response.exito = false;
        response.msg = "Error al guardar el empleado";
        res.json(response);
        return;
      }

      response.exito = true;
      response.msg = "El empleado se guardó correctamente";
      res.json(response);
    });
  }
};

exports.find = async function (req, res) {
  const empleados = await Empleado.find();
  res.json(empleados);
};

exports.findOne = async function (req, res) {
  const empleado = await Empleado.findOne({ numeroDocumento: req.params.id });
  res.json(empleado);
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

exports.update = async function (req, res) {
  let empleado = {
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    tipoDocumento: req.body.tipoDocumento,
    numeroDocumento: req.body.numeroDocumento,
    telefono: req.body.telefono,
    pass: req.body.pass,
  };
  empleado.pass = await bcrypt.hash(req.body.pass, 10);
  Empleado.findByIdAndUpdate(req.params.id, { $set: empleado }, function (err) {
    if (err) {
      console.log(err);
      response.exito = false;
      response.msg = "Error al actualizar el empleado";
      res.json(response);
      return;
    }

    response.exito = true;
    response.msg = "El empleado ha sido actualizado";
    res.json(response);
  });
};

exports.login = async function (req, res) {
  const numeroDocumento = req.body.numeroDocumento;
  const pass = req.body.pass;

  const empleado = await Empleado.findOne({
    numeroDocumento: numeroDocumento,
  });

  if (!empleado) {
    return res.json({
      mensaje: "Número de documento no registrado",
    });
  }

  const match = await bcrypt.compare(pass, empleado.pass);

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
