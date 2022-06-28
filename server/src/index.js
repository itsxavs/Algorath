const express = require('express')
const cors = require('cors')
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: 'http://localhost:4200'
}));

//Routes
app.use(require('./routes/routes'))

app.listen(3000);
console.log('Server running')