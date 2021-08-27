const productsRouters = require('./src/routes/productsRouter');
const usersRouters = require ('./src/routes/usersRouter');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');


app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use('/products', productsRouters);  // se concatenan las rutas del primer y segundo parámetro 
app.use('/users', usersRouters); 


app.get('/', (req,res) =>{	
    res.render('index');
});

app.get('/carrito', (req,res) =>{
  res.render('carrito');
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});

