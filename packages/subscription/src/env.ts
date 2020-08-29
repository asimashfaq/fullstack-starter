import { cleanEnv, str } from 'envalid';

export type Environments = 'production' | 'development' | 'test';

export type Env = Readonly<{
  NODE_ENV: Environments;
  LOGS_PATH: string;
  DB_URI: string;
  DB_NAME: string;
  DB_CERTS: string;
  LOG_LEVEL?: string;
}>;

export const env: Env = cleanEnv(
  process.env,
  {
    NODE_ENV: str({
      choices: ['production', 'development', 'test'],
      default: 'development',
    }),

    LOGS_PATH: str({ default: './tmp/logs' }),

    DB_URI: str({ default: 'https://a.free.bcdapps.ravendb.cloud' }),
    DB_NAME: str({ default: 'sampledatabase' }),
    DB_CERTS: str({
      default:
        '/free.bcdapps.client.certificate/free.bcdapps.client.certificate.pfx',
    }),

    LOG_LEVEL: str({
      choices: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
      default: 'debug',
    }),
  },
  { strict: true, dotEnvPath: __dirname + '/../.env' },
);
