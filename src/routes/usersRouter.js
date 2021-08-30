const usersControllers = require('../controllers/usersControllers')

const express = require('express');
const router = express.Router();

router.get('/crear_cuenta',usersControllers.crear_cuenta);

router.post('/crear_cuenta',usersControllers.procesoCrearCuenta);

router.get('/login',usersControllers.login);

router.post('/login', usersControllers.procesoLogin);

router.get('/perfil',usersControllers.perfil);


module.exports = router;