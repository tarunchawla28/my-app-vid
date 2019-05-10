/*
const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.label({ label: '[my-label]' }),
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      //
      // The simple format outputs
      // `${level}: ${message} ${[Object with everything else]}`
      //
      winston.format.simple()
      //
      // Alternatively you could use this custom printf format if you
      // want to control where the timestamp comes in your final message.
      // Try replacing `format.simple()` above with this:
      //
      // format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
      new winston.transports.Console()
    ]
  });  
*/