const { Router } = require('express');
const router = Router();
const VehiculoController = require('../controllers/Vehiculo.controller');;

router.post('/crear', VehiculoController.crearVehiculo);
router.get('/listar/:idCliente', VehiculoController.listarPorCliente);
router.delete('/eliminar/:placa', VehiculoController.eliminar);
router.put('/actualizar/:placa', VehiculoController.actualizar);

module.exports = router;