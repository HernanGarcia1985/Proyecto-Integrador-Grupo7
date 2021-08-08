const productsController = require('./../controllers/productsController');

const express = require('express');
const router = express.Router();
const multer = require('multer');
//***  Multer configuration  ****/

const configuracionImagen = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img/productos'));    // Ruta donde almacenamos el archivo/en este caso en una carpeta productos dentro de imagenes
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName =  Date.now() + file.originalname ;   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});


const uploadFile = multer({ storage: configuracionImagen });



router.get('/detalle:id',productsController.detalle_producto);  //products/:id cambio por comentario de jero al final de la clase

router.get('/create',productsController.crear_producto); //products/create

//router.post('/create',productsController.crear_producto2); //products/create ?????consultar

router.get('/edit/:id',productsController.editar_producto); //products/:id/edit cambio por comentario de jero al final de la clase

//router.put('/edit/:id',productsController.editar_producto2); //products/:id cambio por comentario de jero al final de la clase

//router.delete('/edit/:id',productsController.editar_producto3); //products/:id cambio por comentario de jero al final de la clase

router.get('/',productsController.listado_producto); //products 




module.exports = router;

/*/*** EDIT ONE PRODUCT ***/ 
//router.get('/edit/:id', productsController.edit); 
//router.put('/edit/:id', productsController.update); 
