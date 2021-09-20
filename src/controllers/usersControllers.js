const bcryptjs = require('bcryptjs');
//const {validationResult} = require('express-validator');

const db = require('../database/models');
const User = require('../models/usersModel');

const usersControllers = {

    	perfil: (req, res) => {	
                res.render('users/perfil', {usuario: req.session.usuarioLogueado});
        },

        login: (req, res) => {
                res.render('users/login');
        },   

        crear_cuenta: (req, res) => {
                res.render('users/crear_cuenta');
        },

        procesoLogin: (req, res) => {

			db.Usuario.findOne({
				where: {
					email: req.body.email
				}
			})
				.then((usuarioLogin) =>{
					if(usuarioLogin) {
						let validarPassword = bcryptjs.compareSync(req.body.password, usuarioLogin.password);
						if (validarPassword == true) { //Cambiar a true cuando cuando esten hasheados los passwords
							delete usuarioLogin.password;
							req.session.usuarioLogueado = usuarioLogin;
		
							//if(req.body.remember_user) {
							//	res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
							//} //Opcion de recordar usuario
		
							return res.redirect('/users/perfil');
						} 
						return res.render('users/login', {
							errors: {
								email: {
									msg: 'Las credenciales son inválidas'
								}
							}
						});
					}
		
					return res.render('users/login', {
						errors: {
							email: {
								msg: 'No se encuentra este email en nuestra base de datos'
							}
						}
					});
				})
				.catch(function(error){
					console.log("No se encuentra este email en nuestra base de datos");
				})
		},

        procesoCrearCuenta: (req, res) => {
		/*const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('crear_cuenta', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}*/
		console.log(req.body.email);
		db.Usuario.findOne({
			where: {
				email: req.body.email
			}
		})
			.then((usuarioEnBD) =>{
				console.log(usuarioEnBD)
				if (usuarioEnBD) {
					return res.render('crear_cuenta', {
						errors: {
							email: {
								msg: 'Este email ya está registrado'
							}
						},
						oldData: req.body
					});
				}

				db.Usuario.create({
					name: req.body.name,
					lastName: req.body.lastName,
					email: req.body.email,
					telephone: req.body.telephone,
					password: bcryptjs.hashSync(req.body.password, 10),
					//image: //req.file.filename,
					type: req.body.type
				});
			})
			.catch(function(error){
				console.log("No se pudo crear el registro en la base de datos");
			})

			return res.redirect('/users/login');

		}

		/*

		logout: (req, res) => {
			res.clearCookie('userEmail');
			req.session.destroy();
			return res.redirect('/');
		}*/
}


module.exports = usersControllers;