const usersControllers = require('../controllers/usersControllers');
const {body}= require ('express-validator');
const validateCreate= [
    body ('name', 'lastName').notEmpty().withMessage("Campo obligatorio"),
    body ('email').isEmail().withMessage("Ingresé un mail válido"),
];
const express = require('express');
const router = express.Router();

router.get('/crear_cuenta',usersControllers.crear_cuenta);

router.post('/crear_cuenta',validateCreate,usersControllers.procesoCrearCuenta);

router.get('/login',usersControllers.login);

router.post('/login', usersControllers.procesoLogin);

router.get('/perfil',usersControllers.perfil);


module.exports = router;