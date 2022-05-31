/* Importo el módulo express */
const express = require ('express');

/* Guardo en la variable app la ejecución de la función express */
const app = express();

/* Importo el módulo nativo path en la variable path */
const path = require ('path');

/*const port = process.env.port.PORT || 8000;*/
/* A través de la propiedad static de express establezco los archivos estáticos */
app.use (express.static('public'));

/* Levanto mi servidor */
app.listen(8000, () => console.log('Servidor funcionando en 8000'))

/* Indico cuando me mostrará el home de mi página */
app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

/* Indico cuando se mostrará el register de mi página */
app.get ('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

/* Indico cuando se mostrará el login de mi página */
app.get ('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

/* Redirecciono al home al completar el formulario del register y del login */
app.post ('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})