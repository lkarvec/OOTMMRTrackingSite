import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: 'debug',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'base-service' },
    transports: [
        new transports.Console()
    ]
});

export default logger;