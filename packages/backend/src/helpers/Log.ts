import Logger from 'bunyan';
import PrettyStream from 'bunyan-prettystream';
import { existsSync } from 'fs';
import mkdirp from 'mkdirp';

import { env } from '../env';

export interface ILogArgs {
  // which file used to store logs
  name: string;
}

let isLogsFolderExists = env.LOGS_PATH ? existsSync(env.LOGS_PATH) : false;

const prettyStdOut = new PrettyStream();

prettyStdOut.pipe(process.stdout);

export function createEverLogger({ name }: ILogArgs): Logger {
  if (!isLogsFolderExists) {
    mkdirp.sync(env.LOGS_PATH);
    isLogsFolderExists = true;
  }

  const logger = Logger.createLogger({
    name: `subcriptionsystem.${name}`,
    serializers: Logger.stdSerializers,
    streams: [
      {
        level: 'info',
        path: `${env.LOGS_PATH}/info_${name}.log`,
      },
      {
        level: 'error',
        path: `${env.LOGS_PATH}/error_${name}.log`,
      },
      {
        level: 'debug',
        path: `${env.LOGS_PATH}/debug_${name}.log`,
      },
      {
        level: 'debug',
        type: 'raw',
        stream: prettyStdOut,
      },
    ],
  });

  if (env.LOG_LEVEL) {
    logger.level(Logger[env.LOG_LEVEL.toUpperCase()]);
  }

  return logger;
}

export const Log = (logArgs: ILogArgs): ClassDecorator => (target) => {
  target.prototype.logName = logArgs.name;
  target.prototype.log = createEverLogger(logArgs);
};
