const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongodb = require('./db/mongodb.connection');

require('dotenv').config();

const placeRouter = require('./src/routes/place');
const app = express();

mongodb.connectMongoDb()
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));
app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//complete with your resource
app.use('/v1/places', placeRouter);


module.exports = app;
