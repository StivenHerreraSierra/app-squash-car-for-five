const Empleado = require("../models/empleados.model");

let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let empleado = new Empleado({
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    tipo_documento: req.body.tipo_documento,
    numero_documento: req.body.numero_documento,
    telefono: req.body.telefono,
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
