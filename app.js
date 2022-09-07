const express = require('express');
const app = express();

app.use(express.static(path.join( dirname, '/public'))) ;

app.get("/', (req,res) =>
res. send("Cambie"): // permite enviar texto o codlgo
1);