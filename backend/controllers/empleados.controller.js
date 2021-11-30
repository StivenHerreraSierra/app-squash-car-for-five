const Empleado = require("../models/empleados.model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let response = {
  msg: "",
  exito: false,
};

exports.create = async function (req, res) {
  const checkEmpleado = await Empleado.findOne({
    numeroDocumento: req.body.numeroDocumento,
    tipoDocumento: req.body.tipoDocumento,
  });

  if (checkEmpleado) {
    res.json({
      msg: "El usuario ya se encuentra registrado",
    });
  } else {
    const empleado = new Empleado({
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      tipoDocumento: req.body.tipoDocumento,
      numeroDocumento: req.body.numeroDocumento,
      usuario: req.body.usuario,
      telefono: req.body.telefono,
      pass: req.body.pass,
      role: req.body.role,
    });

    empleado.pass = await bcrypt.hash(req.body.pass, 10);

    await empleado.save(function (err) {
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
  const empleados = await Empleado.find({ role: "Empleado" });
  res.json(empleados);
};

exports.findOne = async function (req, res) {
  const infoEmpleado = {
    numeroDocumento: req.params.id,
    role: "Empleado",
    tipoDocumento: req.body.tipoDocumento,
  };
  const empleado = await Empleado.findOne(infoEmpleado);
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
  const empleado = {
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    telefono: req.body.telefono,
  };

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
  const usuario = req.body.usuario;
  const pass = req.body.pass;
  const tipoDocumento = req.body.tipoDocumento;

  const empleado = await Empleado.findOne({
    usuario: usuario,
    tipoDocumento: tipoDocumento,
  });

  if (!empleado) {
    return res.json({
      mensaje: "Usuario no registrado",
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
      role: empleado.role,
      token: token,
    });
  } else {
    res.json({
      mensaje: "Credenciales inválidas",
    });
  }
};
