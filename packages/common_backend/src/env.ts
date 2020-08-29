import { cleanEnv, str } from 'envalid';

export type Environments = 'production' | 'development' | 'test';

export type Env = Readonly<{
  NODE_ENV: Environments;

  LOGS_PATH: string;

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

    LOG_LEVEL: str({
      choices: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
      default: 'debug',
    }),
  },
  { strict: true, dotEnvPath: __dirname + '/../.env' },
);
