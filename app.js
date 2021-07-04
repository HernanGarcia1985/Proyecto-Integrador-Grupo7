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



app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));

app.listen(3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});

