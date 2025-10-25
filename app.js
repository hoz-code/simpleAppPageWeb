//First Line

import path from 'path' //module inside nodejs
import { fileURLToPath } from 'url'; //module inside nodejs

import express from 'express' //module installed 
import exphbs from 'express-handlebars'; //module installed


const app = express();
//const port = 3000 || process.env.PORT
const port = process.env.PORT || 4000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'frontend')))
//app.use(express.static(path.join(__dirname, 'views')))

console.log('THIS LOG IS PROBE FOR RENDER SERVICE')

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));

app.set('view engine', 'handlebars')
app.set('views', './views')


app.get('/hbs', (req, res) => {
    res.render('home', {
        title: 'Welcome to Handlebars!',
        message: 'This is a dynamic message from Express.'
    })
})


app.get('/', (req, res) => {
    res.send({ "response": "Ok response" })
})

//app.listen(port, () => { console.log(`Server is listening: Port ${port}`) }) //This line is for set the listener server in local host or in the same net

//app.listen(port, '127.0.0.1', () => { console.log(`Server is listening: Port ${port}`) }) //This line is for set the listener server in local host or in the same net

app.listen(port, '0.0.0.0', () => { console.log(`Server is listening: Port ${port}`) }) //This line is for set the listener server in local host or in the same net

//app.listen(port, '0.0.0.0',() => { console.log(`Server is listening: Port ${port}`) }) //This line is for set the listener server in internet