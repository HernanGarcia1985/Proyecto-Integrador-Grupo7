const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos-pet.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsControllers = 
{
    	detalle_producto: (req, res) => {	
                res.render('products/detalle_producto',);
        },

        crear_producto: (req, res) => {
                res.render('products/crear_producto');
        },   
   	// Create -  Method to store
	store: (req, res) => {

		let errors = validationResult(req);

		if ( errors.isEmpty() ) {

			idNuevo=0;

		for (let s of products){
			if (idNuevo<s.id){
				idNuevo=s.id;
			}
		}

		idNuevo++;

		let nombreImagen = req.file.filename;


		let productoNuevo =  {
			id:   idNuevo,
			name: req.body.name ,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: nombreImagen
		};

		products.push(productoNuevo);

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null,' '));

		res.redirect('/');

		
		}
		else{
			res.render('crear_producto', {errors: errors.array() } ); 
		}
	
		
	},

        listado_producto: (req, res) => {
                const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); //leo los productos de la bd
                res.render('products/listado_producto', {productos: products}); //paso los productos con obj literal
        },
        editar_producto:(req, res) => {

		let id = req.params.id;
		let productoEncontrado;

		for (let s of products){
			if (id==s.id){
				productoEncontrado=s;
			}
		}

		res.render('products/editar_producto',{ProductoaEditar: productoEncontrado});
	},
}

module.exports = productsControllers;

/* Update - Form to edit
edit: (req, res) => {

        let id = req.params.id;
        let productoEncontrado;

        for (let s of products){
                if (id==s.id){
                        productoEncontrado=s;
                }
        }

        res.render('product-edit-form',{ProductoaEditar: productoEncontrado});
},*/