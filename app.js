const productsRouters = require('./src/routes/productsRouter');
const usersRouters = require ('./src/routes/usersRouter');
const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');

app.use('/', productsRouters);  // se concatenan las rutas del primer y segundo parámetro 
app.use('/', usersRouters); 


app.get('/', (req,res) =>{
  
  res.sendFile(path.resolve(__dirname, './views/index.ejs'));
  console.log(__dirname)
});

app.get('/carrito', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/carrito.ejs'));
});

app.use(express.static(path.resolve(__dirname, './public')));


app.listen(process.env.PORT || 3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});
