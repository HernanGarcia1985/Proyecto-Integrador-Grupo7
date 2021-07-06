const express = require('express')
const app = express()
const path = require('path');

app.get('/', (req,res) =>{
  
  res.sendFile(path.join(__dirname, './views/index.html'));
  console.log(__dirname)
});

app.get('/producto', (req,res) =>{
  
  res.sendFile(path.join(__dirname, './views/producto.html'));
  console.log(__dirname)
});

app.get('/carrito', (req,res) =>{
  res.sendFile(path.join(__dirname, './views/carrito.html'));
});

app.get('/crear_cuenta', (req,res) =>{
  res.sendFile(path.join(__dirname, './views/crear_cuenta.html'));
});
 

app.get('/login', (req,res) =>{
  res.sendFile(path.join(__dirname, './views/login.html'));
});


app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));

app.listen(3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});

