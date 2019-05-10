/*let logger = winston.createLogger({
    level: 'info',
    // format: winston.format.combine(
    //     winston.format.timestamp(),
    //     winston.format.printf(info => {
    //         return `${info.timestamp} ${info.level}: ${info.message}`;
    //     })  
    // ),
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
    ),
    defaultMeta: { service: 'your-service-name' },
    transports: [
    new winston.transports.File({ filename: 'app.log' })]
});*/