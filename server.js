// Budget API

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


app.use(cors());

//connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budgetapi');

app.use(bodyParser.json());
app.use(express.static('public'));

// initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
