const usersControllers = 
{
    	perfil: (req, res) => {	
                res.render('users/perfil',);
        },

        login: (req, res) => {
                res.render("users/login");
        },   

        crear_cuenta: (req, res) => {
                res.render("users/crear_cuenta");
        }
}

module.exports = usersControllers;