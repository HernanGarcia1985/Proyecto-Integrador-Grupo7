const productsRouters = require('./routes/productsRouter');
const usersRouters = require ('./routes/usersRouter')
const express = require('express');
const app = express();
const path = require('path');

app.use('/', productsRouters);  // se concatenan las rutas del primer y segundo parámetro 
app.use('/', usersRouters); 


app.get('/', (req,res) =>{
  
  res.sendFile(path.join(__dirname, './views/index.html'));
  console.log(__dirname)
});

app.get('/carrito', (req,res) =>{
  res.sendFile(path.join(__dirname, './views/carrito.html'));
});



app.use(express.static(path.join(__dirname, './public')));


app.listen(process.env.PORT || 3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});

