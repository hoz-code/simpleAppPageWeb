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

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));  // for parsing application/x-www-form-urlencoded


app.get('/pokeselect', async (req, res) => {
    const result = await connectiondatabase('pokeselect', null)
    res.send(result)
})

app.patch('/pokeupdate', async (req, res) => {
    const result = await connectiondatabase('pokeupdate', req.body)
    res.send(result)
})

app.delete('/pokedelete', async (req, res) => {
    const result = await connectiondatabase('pokedelete', req.body)
    res.send(result)
})

app.post('/pokeinsert', async (req, res) => {
    const result = await connectiondatabase('pokeinsert', req.body)
    res.send(result)
})


//app.listen(port, () => { console.log(`Server is listening: Port ${port}`) }) //This line is for set the listener server in local host or in the same net

//app.listen(port, '127.0.0.1', () => { console.log(`Server is listening: Port ${port}`) }) //This line is for set the listener server in local host or in the same net

app.listen(port, '0.0.0.0', () => { console.log(`Server is listening: Port ${port}`) }) //This line is for set the listener server in local host or in the same net

//app.listen(port, '0.0.0.0',() => { console.log(`Server is listening: Port ${port}`) }) //This line is for set the listener server in internet