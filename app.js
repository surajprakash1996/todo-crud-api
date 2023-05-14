const express = require('express');
const app = express();
const db =  require('./models/index.model');
const indexRoute =  require('./routes/index.routes');
const cors = require('cors');
const morgan = require('morgan');

/* Sync database */

db.sequelize.sync({force:false});

/* Parse json and Url encoded data from client  */ 
app.use(express.json());
app.use(express.urlencoded({ extended:true }));


app.use(morgan('dev'));
app.use(cors());

/* sync routes */
app.use(indexRoute);

module.exports = app;   