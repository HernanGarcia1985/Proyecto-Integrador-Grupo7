const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const db = require('../database/models');
const Sequelize = require('sequelize');

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
					res.render('products/detalle_producto',{productoDetalle: productoEncontrado});
				})
				.catch(function(error){
					console.log("error!");
				})
    },

    crear_producto: (req, res) => {
		let promesaCategoria = db.Categoria.findAll();
		let promesaAnimal = db.Animal.findAll();
		
		Promise.all([promesaCategoria,promesaAnimal])
			.then(function([resultadoCategoria,resultadoAnimal]){
				console.log(resultadoAnimal);
				res.render('products/crear_producto',{categoria:resultadoCategoria,animal:resultadoAnimal});
			})
			
			.catch(function(error){
				console.log("error!");
			})
	},

   	// Create -  Method to store
	store: (req, res) => {

		let errors = validationResult(req);
		console.log(errors)
		console.log(req.file);
		console.log(req.body);
		if ( errors.isEmpty() ) {
	
		//let nombreImagen = req.file.filename;

		db.Producto.create({
			
			name: req.body.name ,
			price: req.body.price,
			discount: req.body.discount,
			description: req.body.description,
			image: req.file.filename,
			qty: req.body.qty,
			//createDate: new Date.getTime, //req.body.createDate, //ver de usar funcion date.now()
			id_animal: req.body.id_animal,
			id_categoria: req.body.id_categoria
		});

		res.redirect('/'); //Ver de redireccionar al detalle con el producto creado

		}
		else{
			let promesaCategoria = db.Categoria.findAll();
			let promesaAnimal = db.Animal.findAll();
			
			Promise.all([promesaCategoria,promesaAnimal])
				.then(function([resultadoCategoria,resultadoAnimal]){
					console.log(resultadoAnimal);
					res.render('products/crear_producto',{categoria:resultadoCategoria,animal:resultadoAnimal,errors: errors.array()});
				})
				
				.catch(function(error){
					console.log("error!");
				})
		}
	},

    listado_producto: (req, res) => {
        
		let products;
		db.Producto.findAll() //leo los productos de la bd
			.then((todosLosProdcutos) =>{
				products = todosLosProdcutos;
				res.render('products/listado_producto', {productos: products}); //paso los productos con obj literal
			})
			.catch(function(error){
				console.log("error!");
			})
        
	},

    editar_producto:(req, res) => {
		
		let promesaCategoria = db.Categoria.findAll();
		let promesaAnimal = db.Animal.findAll();
		let promesaProducto = db.Producto.findByPk(req.params.id);
		
		Promise.all([promesaCategoria,promesaAnimal, promesaProducto])
			.then(function([resultadoCategoria,resultadoAnimal,resultadoProducto]){
				console.log(resultadoAnimal);
				res.render('products/editar_producto',{categoria:resultadoCategoria,animal:resultadoAnimal, ProductoaEditar:resultadoProducto});
			})
			
			.catch(function(error){
				console.log("error!");
			})

	},

	// Update - Method to update
	update: (req, res) => {
		let errors = validationResult(req);
console.log(errors)
		if ( errors.isEmpty() ) {

		db.Producto.update(
			{name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			description: req.body.description,
			//image: ruta de la imagen,
			qty: req.body.qty,
			editDate: Sequelize.literal('CURRENT_TIMESTAMP'),
			id_animal: req.body.id_animal,
			id_categoria: req.body.id_categoria
			},
			{where: {id:req.params.id}}
		);
		
		res.redirect('/'); //Ver de direccionar al detalle del producto actualizado
	}
	else{
		let promesaCategoria = db.Categoria.findAll();
		let promesaAnimal = db.Animal.findAll();
		let promesaProducto = db.Producto.findByPk(req.params.id);
		
		Promise.all([promesaCategoria,promesaAnimal, promesaProducto])
			.then(function([resultadoCategoria,resultadoAnimal,resultadoProducto]){
				console.log(resultadoAnimal);
				res.render('products/editar_producto',{categoria:resultadoCategoria,animal:resultadoAnimal, ProductoaEditar:resultadoProducto, errors: errors.array()});
			})
			
			.catch(function(error){
				console.log("error!");
			})

	}
},
	// Delete - Delete one product from DB
	destroy : (req, res) => {

		db.Producto.findByPk(req.params.id)
			.then((producto) =>{
				fs.unlinkSync(path.join(__dirname, '../../public/img/products/', producto.image));
			})
			.catch(function(error){
				console.log("error!");
			})
		
		db.Producto.destroy({
			where: {
				id: req.params.id
			}
		})

		res.redirect('/');
	}
};

module.exports = productsControllers;

