/*
const severityLevelOnly = format(info => {
    info.severityLevel = info.level;
    delete info.level;
    return info;
  });
  
  const logger = createLogger({
    format: combine(
      severityLevelOnly(),
      json()
    ),
    transports: [
      new transports.Console(),
    ]
  });
module.exports = logger;
*/