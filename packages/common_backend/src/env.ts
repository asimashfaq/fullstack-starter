import { cleanEnv, host, port, str } from 'envalid';

export type Environments = 'production' | 'development' | 'test';

export type Env = Readonly<{
  NODE_ENV: Environments;
  LOGS_PATH: string;
  DB_URI: string;
  DB_NAME: string;
  DB_CERTS: string;
  LOG_LEVEL?: string;
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

    LOGS_PATH: str({ default: './tmp/logs' }),

    DB_URI: str({ default: '' }),
    DB_NAME: str({ default: '' }),
    DB_CERTS: str({
      default: '',
    }),
    HOST: host({ default: 'localhost' }),
    PORT: port({ default: 3000 }),
    LOG_LEVEL: str({
      choices: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
      default: 'debug',
    }),
  },
  { strict: true, dotEnvPath: __dirname + '/../../../../.env' },
);
