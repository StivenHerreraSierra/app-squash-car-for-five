const { Router } = require('express');
const router = Router();
const ServicioController = require('../controllers/Servicio.controller');

router.post('/crear', ServicioController.crearServicio);
router.get('/listar/cliente/:idCliente', ServicioController.listarPorCliente);
router.get('/listar/vehiculo/:placa', ServicioController.listarPorPlaca);
router.delete('/eliminar/:id', ServicioController.eliminar);
router.put('/actualizar/:id', ServicioController.actualizar);
router.get('/listar', ServicioController.listarTodosServicios);
module.exports = router;