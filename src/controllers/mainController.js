const mainControllers = 
{
    	index: (req, res) => {	
                res.render('index',);
        },

        carrito: (req, res) => {	
            res.render('carrito',);
    }

}

module.exports = mainControllers;