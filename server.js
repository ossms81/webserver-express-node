const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    let salida = {
        nombre: 'óscar saiz sánchez',
        edad: 37,
        url: req.url
    }

    res.render('home', {
        nombre: 'Óscar',
        anio: new Date().getFullYear()
    })

})

app.get('/about', function(req, res) {

    res.render('about', {
        anio: new Date().getFullYear()
    })

})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})