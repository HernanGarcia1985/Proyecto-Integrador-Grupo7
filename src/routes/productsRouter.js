const productsController = require('./../controllers/productsController')

const express = require('express');
const router = express.Router();

router.get('/detalle_producto',productsController.detalle_producto)

router.get('/crear_producto',productsController.crear_producto)

router.get('/editar_producto',productsController.editar_producto)

router.get('/listado_producto',productsController.listado_producto)


module.exports = router;