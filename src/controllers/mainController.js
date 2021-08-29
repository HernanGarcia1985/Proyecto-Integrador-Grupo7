const fs = require('fs');
const path = require('path');
//const {validationResult} = require('express-validator');

const productsFilePath = path.join(__dirname, '../data/productos-pet.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainControllers = 
{
    	index: (req, res) => {	
                const lastFour =  products.slice(-4); //saca los ultimos 4 productos insertados en el Json para mostrarlos como novedad               
                res.render('index',{novedades: lastFour});
        },

        carrito: (req, res) => {	
            res.render('carrito',);
    }

}

module.exports = mainControllers;