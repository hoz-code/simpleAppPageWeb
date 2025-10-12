//First Line
import express from 'express'
const app = express();
const port = 8080 || process.env.PORT


app.get('/', (req, res) => {
    res.send({ "response": "Ok response" })
})

app.listen(port, () => { console.log(`Server is listening: Port ${port}`) })