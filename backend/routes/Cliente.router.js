const { Router } = require('express');
const router = Router();
const ClienteController = require('../controllers/Cliente.controller');

router.post('/crear', ClienteController.crearCliente);
router.post('/login', ClienteController.login);
router.get('/obtener/:documento', ClienteController.obtener);

module.exports = router;