const productsControllers = require('./../controllers/productsControllers')

const express = require('express');
const router = express.Router();

router.get('/detalle_producto',productsControllers.detalle_producto)

router.get('/crear_producto',productsControllers.crear_producto)

router.get('/editar_producto',productsControllers.editar_producto)

router.get('/listado_producto',productsControllers.listado_producto)


module.exports = router;