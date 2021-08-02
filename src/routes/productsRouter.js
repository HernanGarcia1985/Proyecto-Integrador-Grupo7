const productsController = require('./../controllers/productsController')

const express = require('express');
const router = express.Router();

router.get('/:id',productsController.detalle_producto);  //products/:id

router.get('/create',productsController.crear_producto); //products/create

//router.post('/create',productsController.crear_producto2); //products/create ?????consultar

router.get('/:id/edit',productsController.editar_producto); //products/:id/edit

//router.put('/:id',productsController.editar_producto2); //products/:id

//router.delete('/:id',productsController.editar_producto3); //products/:id

router.get('/',productsController.listado_producto); //products 




module.exports = router;