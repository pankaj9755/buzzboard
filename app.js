const express = require('express');
const app = express();
const { Port } = require('./helper/config')
const Api = require('./router/route')
const db = require('./helper/db')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use('/api', Api)
app.listen(Port, () => console.log(`Server run on port ${Port}`))