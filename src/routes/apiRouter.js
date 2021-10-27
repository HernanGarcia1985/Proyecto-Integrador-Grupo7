const productsController = require('./../controllers/productsController');
const usersControllers = require('../controllers/usersControllers');
const express = require('express');
const router = express.Router();

router.get('/todosLosUsuarios',usersControllers.todosLosUsuarios);

router.get('/usuarioPorId/:id',usersControllers.usuarioPorId);

router.get('/ultimoUsuario', usersControllers.ultimoUsuario);

router.get('/todosLosProductos',productsController.todosLosProductos);

router.get('/todasLasCategorias',productsController.todasLasCategorias);

router.get('/productoPorId/:id',productsController.productoPorId);

router.get('/cantidadProductosPorCategoria',productsController.cantidadProductosPorCategoria);

router.get('/ultimoProducto', productsController.ultimoProducto);

module.exports = router;