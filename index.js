const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 7000
const routes = require('./routes/api')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors= require("cors")
app.use(cors())
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => { console.log('conected to Data base') })
  .catch((err) => console.log(err))
app.use(bodyParser.json())
app.use('/api', routes)

app.use((err, req, res, next) => {
  console.log(err);
  next();
})


app.use(bodyParser.json());
app.listen(port, () => {
  console.log('server conected on port: ' + port);
})