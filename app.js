//First Line

import path from 'path' //module inside nodejs
import { fileURLToPath } from 'url'; //module inside nodejs

import express from 'express' //module installed 



const app = express();
const port = 8080 || process.env.PORT
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'frontend')))

app.get('/', (req, res) => {
    res.send({ "response": "Ok response" })
})

app.listen(port, () => { console.log(`Server is listening: Port ${port}`) })