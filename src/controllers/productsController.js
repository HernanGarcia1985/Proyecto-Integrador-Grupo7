const fs = require('fs');
const path = require('path');
//const {validationResult} = require('express-validator');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/productos-pet.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsControllers = 
{
    detalle_producto: (req, res) => {

			//let idURL = req.params.id;
			let productoEncontrado;

			db.Producto.findByPk(req.params.id)
				.then((producto) =>{
					productoEncontrado = producto;
				});

		    res.render('products/detalle_producto',{productoDetalle: productoEncontrado});
    },

    crear_producto: (req, res) => {
                res.render('products/crear_producto');
    },   

   	// Create -  Method to store
	store: (req, res) => {

		//let errors = validationResult(req);

		//if ( errors.isEmpty() ) {

		//let nombreImagen = req.file.filename;

		db.Producto.create({
			
			name: req.body.name ,
			price: req.body.price,
			discount: req.body.discount,
			description: req.body.description,
			//image: ruta de la Imagen
			//qty: req.body.qty,
			//createDate: req.body.createDate,
			//id_animal: req.body.id_animal,
			//id_categoria: req.body.id_categoria
		});

		//Ver de redireccionar al detalle con el producto creado

		res.redirect('/');

		
		//}
		//else{
		//	res.render('crear_producto', {errors: errors.array() } ); 
		//}
	
		
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

	// Update - Method to update
	update: (req, res) => {
		
		let id = req.params.id;
		let productoEncontrado;

		for (let s of products){
			if (id==s.id){
				s.name= req.body.name;
				s.price= req.body.price;
				s.discount= req.body.discount;
				s.category= req.body.category;
				s.description= req.body.description;
				break;
			}
		}

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null,' '));

		res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {

		let id = req.params.id;
		let productoEncontrado;

		let Nproducts = products.filter(function(e){
			return id!=e.id;
		})

		for (let producto of products){
			if (producto.id == id){
			    productoEncontrado=producto;
			}
		}

		//fs.unlinkSync(path.join(__dirname, '../../public/images/products/', ProductoEncontrado.image));

		fs.writeFileSync(productsFilePath, JSON.stringify(Nproducts,null,' '));

		res.redirect('/');
	}
};

module.exports = productsControllers;

