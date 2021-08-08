const productsControllers = 
{
    	detalle_producto: (req, res) => {	
                res.render('products/detalle_producto',);
        },

        crear_producto: (req, res) => {
                res.render('./products/crear_producto');
        },   

        listado_producto: (req, res) => {
                res.render('products/listado_producto');
        },
        editar_producto: (req, res) => {
                res.render('editar_producto');
        }
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