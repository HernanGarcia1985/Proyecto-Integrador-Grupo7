const productsController = require('./../controllers/productsController');

const express = require('express');
const router = express.Router();

router.get('/detalle:id',productsController.detalle_producto);  //products/:id cambio por comentario de jero al final de la clase

router.get('/create',productsController.crear_producto); //products/create

//router.post('/create',productsController.crear_producto2); //products/create ?????consultar

router.get('/edit/:id',productsController.editar_producto); //products/:id/edit cambio por comentario de jero al final de la clase

//router.put('/edit/:id',productsController.editar_producto2); //products/:id cambio por comentario de jero al final de la clase

//router.delete('/edit/:id',productsController.editar_producto3); //products/:id cambio por comentario de jero al final de la clase

router.get('/',productsController.listado_producto); //products 




module.exports = router;