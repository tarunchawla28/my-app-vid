/*
function rest(info) {
    return JSON.stringify(Object.assign({}, info, {
      level: undefined,
      message: undefined,
      splat: undefined,
      label: undefined
    }));
  }
  
  let logger = winston.createLogger({
    transports: [new winston.transports.Console({ level: 'info' })],
    format: format.combine(
      format.splat(),
      format.printf(info => `[${info.label}] ${info.message} ${rest(info)}`)
    )
  });
*/