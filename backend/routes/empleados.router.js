const express = require("express");
const router = express.Router();
const empleadoController = require("../controllers/empleados.controller");


router.post("/", empleadoController.create);

module.exports = router;