const express = require('express');
const app = express();

app.use(express.static(path.join( dirname, '/public'))) ;

app.listen(3000,()=>{
    console.log("Esta en el puerto 3000");
});

app.get('/', (req,res) =>{
res. send("Cambie"); // permite enviar texto o codlgo
});