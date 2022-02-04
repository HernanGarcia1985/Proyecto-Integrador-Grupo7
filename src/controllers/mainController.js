const fs = require('fs');
const path = require('path');
//const {validationResult} = require('express-validator');
const db = require('../database/models');
const Sequelize = require('sequelize');
const mercadopago = require ('mercadopago');


mercadopago.configure({
    access_token: process.env.PROD_ACCESS_TOKEN
  });

const mainControllers = 
{
    	index: (req, res) => {	
            let lastFour;
            db.Producto.findAll({
                order: [['id','DESC']],
				limit: 4
            }) //leo los productos de la bd
                .then((todosLosProdcutos) =>{
                    lastFour = todosLosProdcutos;
                    res.render('index',{novedades: lastFour}); //saca los ultimos 4 productos para mostrarlos como novedad
                })
                .catch(function(error){
                    console.log("error!");
                }) 
                
        },

        carrito: (req, res) => {	
            res.render('carrito',);
        },

        mercadopago: (req,res) => {
              
              let preference = {
                items: [
                  {
                    title: 'Mi producto',
                    unit_price: 100,
                    quantity: 1,
                  }/*,
                  {
                    title: req.body.title,
                    unit_price: parseInt(req.body.price),
                    quantity: 1,
                  }*/
                ],
                back_urls: {
                    success: "http://localhost:3001/",
                    failure: "http://localhost:3001/failure",
                    pending: "http://localhost:3001/pending"
                  }
              };
              
              mercadopago.preferences.create(preference)
              .then(function(response){
              // Este valor reemplazará el string "<%= global.id %>" en tu HTML
              //global.id = response.body.id;
                res.redirect(response.body.init_point);
              }).catch(function(error){
                console.log(error);
              });
        }

}

module.exports = mainControllers;