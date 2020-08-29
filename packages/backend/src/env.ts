import { cleanEnv, host, num, port, str } from 'envalid';

export type Environments = 'production' | 'development' | 'test';

export type Env = Readonly<{
  isDev: boolean;
  isTest: boolean;
  isProd: boolean;

  NODE_ENV: Environments;

  WEB_CONCURRENCY: number;
  WEB_MEMORY: number;

  LOGS_PATH: string;

  LOG_LEVEL?: string;

  ENGINE_API_KEY?: string;

  MAX_SOCKETS?: number;

  HOST: string;
  PORT: number;
}>;

export const env: Env = cleanEnv(
  process.env,
  {
    NODE_ENV: str({
      choices: ['production', 'development', 'test'],
      default: 'development',
    }),

    WEB_CONCURRENCY: num({ default: 1 }),
    WEB_MEMORY: num({ default: 2048 }),
    HOST: host({ default: 'localhost' }),
    PORT: port({ default: 3000 }),

    LOGS_PATH: str({ default: './tmp/logs' }),

    LOG_LEVEL: str({
      choices: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
      default: 'debug',
    }),

    MAX_SOCKETS: num({ default: Infinity }),
  },
  { strict: true, dotEnvPath: __dirname + '/../.env' },
);
