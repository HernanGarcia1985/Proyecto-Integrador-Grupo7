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
				res.render('products/crear_producto',{categoria:resultadoCategoria,animal:resultadoAnimal});
			})
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
			qty: req.body.qty,
			//createDate: new Date.getTime, //req.body.createDate, //ver de usar funcion date.now()
			id_animal: req.body.id_animal,
			id_categoria: req.body.id_categoria
		});

		res.redirect('/'); //Ver de redireccionar al detalle con el producto creado

		//}
		//else{
		//	res.render('crear_producto', {errors: errors.array() } ); 
		//}
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
		
		let productoEncontrado;

		db.Producto.findByPk(req.params.id)
				.then((producto) =>{
					productoEncontrado = producto;
					res.render('products/editar_producto',{ProductoaEditar: productoEncontrado});
				})
				.catch(function(error){
					console.log("error!");
				})
	},

	// Update - Method to update
	update: (req, res) => {

		db.Producto.update(
			{name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			description: req.body.description,
			//image: ruta de la imagen,
			qty: req.body.qty,
			//createDate: req.body.createDate, //NO VA
			id_animal: req.body.id_animal,
			id_categoria: req.body.id_categoria
			},
			{where: {id:req.params.id}}
		);
		
		res.redirect('/'); //Ver de direccionar al detalle del producto actualizado
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		
		db.Producto.destroy({
			where: {
				id: req.params.id
			}
		})
		
		//fs.unlinkSync(path.join(__dirname, '../../public/images/products/', ProductoEncontrado.image));

		res.redirect('/');
	}
};

module.exports = productsControllers;

