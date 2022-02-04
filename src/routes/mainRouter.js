const mainController = require('./../controllers/mainController');

const express = require('express');
const router = express.Router();

router.get('/',mainController.index);

router.get('/carrito',mainController.carrito);

router.post('/checkout',mainController.mercadopago);

module.exports = router;