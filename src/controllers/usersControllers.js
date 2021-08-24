const User = require('../models/usersModel');

let usuario = {
	id:1,
	name:"Katerina",
	lastname: "Baudins",
	email:"kbaudins0@diigo.com",
	password:"LQcpPlvddkA0",
	image:"http://dummyimage.com/108x100.png/ff4444/ffffff"
}; //Creado para q funcione la vista perfil, cuando se haga la logica del json borrar

const usersControllers = {

    	perfil: (req, res) => {	
                res.render('users/perfil', {usuario: usuario});
        },

        login: (req, res) => {
                res.render('users/login');
        },   

        crear_cuenta: (req, res) => {
                res.render('users/crear_cuenta');
        }

		
}


module.exports = usersControllers;