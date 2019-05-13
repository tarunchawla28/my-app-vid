const winston = require('winston');
module.exports=function(){
    winston.handleExceptions(new winston.transports.File({ filename: 'uncaughtExceotion.log' }))

    process.on('unhandledRejection', (ex) => {
        throw ex;
    })
}