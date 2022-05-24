const express = require('express');
const app = express();
const path = require("path");
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/registro', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/registro.html'));
});

app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
})

////////
app.post('/datos',(res,req)=>{
    res.send(req.body);

})