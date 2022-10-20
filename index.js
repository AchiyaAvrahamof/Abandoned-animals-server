const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 6000
const routes = require('./routes/api')
const bodyParser = require('body-parser')
require('dotenv').config()

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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json());
app.listen(port, () => {
  console.log('server conected on port: ' + port);
})