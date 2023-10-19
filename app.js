
const express = require('express')
const hbs = require('hbs');
//configurar variable de entorno
require('dotenv').config();
const app = express()
const port = process.env.PORT

/* const port = 8080 */

app.set('view engine', 'hbs');

// Es donde se ubican los archivos a reutilizar
hbs.registerPartials(__dirname+'/views/partials')

app.use(express.static('public'))

// controlador de la ruta principal
// aqui hacemos el llamdo de home.hbs no es necesario indicar el tipo de archivo
app.get('/', (req, res) => {
    res.render('home3', {
        nombre: 'Dallana García',
        titulo:'Curso de Node'
    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

