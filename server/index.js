const ConnectToMongo = require('./Config/db');
const express = require('express')
var cors = require('cors')
require("dotenv").config();
ConnectToMongo();


const app = express()
const port = 5000


app.use(cors())
app.use(express.json())


//Auth Routes
app.use('/auth', require('./routes/auth'));


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })