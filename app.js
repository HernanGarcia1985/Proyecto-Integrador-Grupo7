const express = require('express')
const app = express()
const path = require('path');

app.get('/', (req,res) =>{
  
  res.sendFile(path.join(__dirname, './public/views/index.html'));
  console.log(__dirname)
});

app.use(express.static(path.join(__dirname, './public')));


app.listen(3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});

