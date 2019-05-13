/*const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);*/
const express = require('express');
const app = express();
/*const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');*/
//const mongoose = require('mongoose');
//const config = require('config');
//const error = require('./middleware/error');
require('express-async-errors');
const logger = require('./logger/logger');
//const winston = require('winston');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/logging')();
require('./startup/config')();
require('./startup/validation')();
/*process.on('uncaughtException', (ex) => {
    console.log('We got and uncaught exception');
    console.log(ex);
    logger.error(ex.stack);
});*/
//winston.handleExceptions(new winston.transports.File({ filename: 'uncaughtExceotion.log' }))

/*process.on('unhandledRejection', (ex) => {
    console.log('We got and unhandled rejection');
    logger.error(ex);
    setTimeout(()=>{
       process.exit(1);
    },1000)
});*/
/*process.on('unhandledRejection', (ex) => {
    throw ex;
})*/




    //throw new Error('Hello, winston!');
    //const p = Promise.reject(new Error('Something failed'));
    //p.then(() => console.log('Done'));

/*process
.on('unhandledRejection', (reason, p) => {
  console.error(reason, 'Unhandled Rejection at Promise', p);
})
.on('uncaughtException', err => {
  console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
});
*/
//const p = Promise.reject(new Error('Something failed'));
//p.then(() => console.log('Done'));

/*if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
}*/




/*mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to database'))
    // .catch(err => console.error(err.message));*/

/*app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use(error);*/

/*app.use(function (err, req, res, next) {
    res.status(500).send('Something failed');
});*/



app.listen(3010, () => logger.info('Listening on port 3010'));