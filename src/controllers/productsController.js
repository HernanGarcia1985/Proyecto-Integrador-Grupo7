const productsControllers = 
{
    	detalle_producto: (req, res) => {	
                res.render('products/detalle_producto',);
        },

        crear_producto: (req, res) => {
                res.render('crear_producto');
        },   

        listado_producto: (req, res) => {
                res.render('products/listado_producto');
        },
        editar_producto: (req, res) => {
                res.render('products/editar_producto');
        }
}

module.exports = productsControllers;