//Outside packages
import express from 'express' //module installed 

//internal packages


// own packages
import { database } from './db/configdb.js';


//set parameters
const app = express();
const port = 3000 || process.env.PORT
const connectiondatabase = database

console.log("IM CONECTING /////////////////////////////")


let succesfullDBConnection = 0;
succesfullDBConnection = await connectiondatabase()
console.log(succesfullDBConnection);


app.get('/', (req, res) => {
    res.send({ "response": "Ok response" })
})

app.get('/hbs', (req, res) => {
    res.send(succesfullDBConnection[0])
})

app.get('/rtx', (req, res) => {
    res.send({ "response": "Ok rtx" })
})


//app.listen(port, () => { console.log(`Server is listening: Port ${port}`) }) //This line is for set the listener server in local host or in the same net

//app.listen(port, '127.0.0.1', () => { console.log(`Server is listening: Port ${port}`) }) //This line is for set the listener server in local host or in the same net

app.listen(port, '0.0.0.0', () => { console.log(`Server is listening: Port ${port}`) }) //This line is for set the listener server in local host or in the same net

//app.listen(port, '0.0.0.0',() => { console.log(`Server is listening: Port ${port}`) }) //This line is for set the listener server in internet