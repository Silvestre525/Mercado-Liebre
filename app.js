const express = require('express');
const path = require("path");

const app = express();

//Ejemplo utilizando modulos de terceros 
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log("servidor corriendo en puerto 3080");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
})  //dirname es la direccion de dh-heroes en este caso en nuestra computadora 
