require('dotenv').config();
const express= require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

// Handlebars

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});



//Servir contenido estatico
app.use("/public", express.static('public')); 
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.render('home',{
        titulo: 'DogIn'
    });
});


app.get('/busqueda',(req,res)=>{
    res.render('busqueda',{
        titulo: 'Dogin'
    });
});

app.get('/registro-cuidador',(req,res)=>{
    res.render('registro-cuidador',{
        titulo: 'Dogin'
    });
});
app.get('/registro',(req,res)=>{
    res.render('registro',{
        titulo: 'Dogin'
    });
});


app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/404.html');
});



app.listen(port, ()=>{
    console.log(`Servidor activo en puerto ${port}`);
});

