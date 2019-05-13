const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, errors, json } = format;
const fs = require('fs');
//require('winston-mongodb');
//winston.add(winston.transports.File, { filename: 'logfile.log' });
//winston.add(winston.transports.MongoDB, { db: 'mongodb://localhost/vidly', level: 'error' })

//First Example -> ../logger/logger1.js

//Second Example -> ../logger/logger2.js

//Third Example -> ../logger/logger3.js

//Fourth Example -> ../logger/logger4.js

//Fifth Example -> ../logger/logger5.js

//Sixth Example -> ../logger/logger6.js

//Seventh Example -> ../logger/logger7.js

//Eighth Example -> ../loger/logger8.js

//Ninth Example -> ../logger/logger9.js

//Tenth Example -> ../logger/logger10.js

//Eleventh Example -> ../logger/logger11.js

//Twelth Example -> ../logger/logger12.js

//Thirteenth Example -> ../logger/logger13.js

//Forteenth Example -> ../logger/logger14.js
  
//Fifteenth Example -> ../logger/logger15.js

const logger = winston.createLogger({
    //format: winston.format.combine(errorStackFormat()),
    transports: [
    new winston.transports.File({ filename: 'app.log' })],
});
module.exports = logger;
// logger.log('info', 'A request was received');
// logger.log({
//     level: 'info',
//     message: 'Pass an object and this works',
//     additional: 'properties',
//     are: 'passed along'
//   });
