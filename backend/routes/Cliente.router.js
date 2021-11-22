const { Router } = require('express');
const router = Router();
const ClienteController = require('../controllers/Cliente.controller');

router.post('/crear', ClienteController.crearCliente);
router.post('/login', ClienteController.login);

module.exports = router;